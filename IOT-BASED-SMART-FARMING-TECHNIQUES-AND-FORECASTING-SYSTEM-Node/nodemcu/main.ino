#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h>
#include <ESP8266HTTPClient.h>
#include <SoftwareSerial.h>

const uint64_t address = 0xF0F0F0F0E1LL;

#define DHTPIN D4      // Pin which is connected to the DHT sensor.
#define DHTTYPE DHT11  // DHT 11
#define S0 D0
#define S1 D1
#define S2 D2
#define S3 D3
#define SIG A0



#define RE D8
#define DE D7

const byte nitro[] = { 0x01, 0x03, 0x00, 0x1e, 0x00, 0x01, 0xe4, 0x0c };
const byte phos[] = { 0x01, 0x03, 0x00, 0x1f, 0x00, 0x01, 0xb5, 0xcc };
const byte pota[] = { 0x01, 0x03, 0x00, 0x20, 0x00, 0x01, 0x85, 0xc0 };

struct MyVariable {
  byte nitrogen;
  byte phosphorous;
  byte potassium;
};
MyVariable variable;

SoftwareSerial mod(D5, D6);



DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "Eldho";
const char* password = "12345678";
const char* serverUrl = "https://nodemcu-server-afc4.onrender.com/api/data";
const char* fingerprint = "15:81:22:01:EB:32:4B:9E:88:4B:17:99:79:CF:93:22:C5:A2:4A:97";

const int AirValue = 600;
const int WaterValue = 350;

int soilMoistureValue = 0;
int soilmoisturepercent = 0;
unsigned long int avgValue;
float b;
int buf[10], temp;
float phValue;
int temperatureValue;
int humidityValue;

WiFiClientSecure wifiClient;
HTTPClient http;

void getSoilMoistureValue() {
  digitalWrite(S0, LOW);
  digitalWrite(S1, LOW);
  digitalWrite(S2, LOW);
  digitalWrite(S3, LOW);
  soilMoistureValue = analogRead(SIG) + 100;

  if (soilMoistureValue >= 0) {
    soilmoisturepercent = map(soilMoistureValue, AirValue, WaterValue, 0, 100);
    if (soilmoisturepercent > 100) {
      soilmoisturepercent = 100;
    }
  } else {
    soilmoisturepercent = 0;
  }
  Serial.println("===============================**********===============================");
  Serial.println("\tIOT BASED SMART FARMING TECHNIQUES AND FORECASTING SYSTEM");
  Serial.println("===============================**********===============================");
  Serial.println("-------------------------------**********-------------------------------");
  Serial.print("Soil Moisture: ");
  Serial.print(soilmoisturepercent);
  Serial.println("%");
}

void getpHValue() {
  digitalWrite(S0, HIGH);
  digitalWrite(S1, LOW);
  digitalWrite(S2, LOW);
  digitalWrite(S3, LOW);
  for (int i = 0; i < 10; i++) {
    buf[i] = analogRead(SIG);
    delay(10);
  }
  for (int i = 0; i < 9; i++) {
    for (int j = i + 1; j < 10; j++) {
      if (buf[i] > buf[j]) {
        temp = buf[i];
        buf[i] = buf[j];
        buf[j] = temp;
      }
    }
  }
  avgValue = 0;
  for (int i = 2; i < 8; i++)
    avgValue += buf[i];
  phValue = (float)avgValue * 3.3 / 1024 / 6;
  phValue = 3.5 * phValue;

  Serial.print("pH Value: ");
  Serial.println(phValue);
}

void getTemperatureAndHumidityValue() {
  temperatureValue = dht.readTemperature();
  humidityValue = dht.readHumidity();

  Serial.print("Temperature: ");
  Serial.print(temperatureValue);
  Serial.print("C");
  Serial.print("\n");
  Serial.print("Humidity: ");
  Serial.print(humidityValue);
  Serial.print("%");
}

void getNPK() {
  byte val;

  digitalWrite(DE, HIGH);
  digitalWrite(RE, HIGH);
  delay(10);

  if (mod.write(nitro, sizeof(nitro)) == 8) {
    digitalWrite(DE, LOW);
    digitalWrite(RE, LOW);

    for (byte i = 0; i < 4; i++) {
      val = mod.read();
    }
    variable.nitrogen = mod.read();
  }

  delay(100);

  digitalWrite(DE, HIGH);
  digitalWrite(RE, HIGH);
  delay(10);

  if (mod.write(phos, sizeof(phos)) == 8) {
    digitalWrite(DE, LOW);
    digitalWrite(RE, LOW);

    for (byte i = 0; i < 4; i++) {
      val = mod.read();
    }
    variable.phosphorous = mod.read();
  }

  delay(100);

  digitalWrite(DE, HIGH);
  digitalWrite(RE, HIGH);
  delay(10);

  if (mod.write(pota, sizeof(pota)) == 8) {
    digitalWrite(DE, LOW);
    digitalWrite(RE, LOW);

    for (byte i = 0; i < 4; i++) {
      val = mod.read();
    }
    variable.potassium = mod.read();
  }


  Serial.print("\n");
  Serial.print("Nitrogen: ");
  Serial.print(variable.nitrogen);
  Serial.println(" mg/kg");

  Serial.print("Phosphorous: ");
  Serial.print(variable.phosphorous);
  Serial.println(" mg/kg");

  Serial.print("Potassium: ");
  Serial.print(variable.potassium);
  Serial.println(" mg/kg");
}


void setup() {
  Serial.begin(9600);
  Serial.println("");
  pinMode(S0, OUTPUT);
  pinMode(S1, OUTPUT);
  pinMode(S2, OUTPUT);
  pinMode(S3, OUTPUT);
  pinMode(SIG, INPUT);
  mod.begin(9600);
  pinMode(RE, OUTPUT);
  pinMode(DE, OUTPUT);

  wifiClient.setFingerprint(fingerprint);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");

  dht.begin();
}

void loop() {
  getSoilMoistureValue();
  getpHValue();
  getTemperatureAndHumidityValue();
  getNPK();

  if (WiFi.status() == WL_CONNECTED) {
    http.begin(wifiClient, serverUrl);
    http.addHeader("Content-Type", "application/json");
    String payload = "{\"temperature\":" + String(temperatureValue) + ",\"humidity\":" + String(humidityValue) + ",\"soil_moisture\":" + String(soilmoisturepercent) + ",\"ph\":" + String(phValue) + ",\"N\":" + String(variable.nitrogen) + ",\"P\":" + String(variable.phosphorous) + ",\"K\":" + String(variable.potassium) + "}";
    int httpResponseCode = http.POST(payload);
    Serial.println("-------------------------------**********-------------------------------");
    if (httpResponseCode > 0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
      Serial.println("===============================##########===============================");
    } else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
      Serial.println("===============================##########===============================");
    }
    http.end();
  } else {
    Serial.println("WiFi Disconnected");
  }

  delay(1000*60*5);
}
