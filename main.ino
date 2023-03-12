#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#define DHTPIN D4          // Pin which is connected to the DHT sensor.
#define DHTTYPE DHT11     // DHT 11
#define S0 D0
#define S1 D1
#define S2 D2
#define S3 D3
#define SIG A0

DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "Eldho";
const char* password = "12345678";
const char* serverUrl = "http://192.168.0.107:3000/api/data";


const int AirValue = 600;
const int WaterValue = 350;

int soilMoistureValue = 0;
int soilmoisturepercent = 0;
unsigned long int avgValue;
float b;
int buf[10],temp;
float phValue;
int temperatureValue;
int humidityValue;

WiFiClient wifiClient;
HTTPClient http;

void getSoilMoistureValue() {
  digitalWrite(S0, LOW); digitalWrite(S1, LOW); digitalWrite(S2, LOW); digitalWrite(S3, LOW);
  soilMoistureValue = analogRead(SIG) + 100;
  
  Serial.print("Soil Moisture: ");
  if (soilMoistureValue >= 0) {
    soilmoisturepercent = map(soilMoistureValue, AirValue, WaterValue, 0, 100);
    if (soilmoisturepercent > 100) {
      soilmoisturepercent = 100;
    }
  } else {
    soilmoisturepercent = 0;
  }
  Serial.print(soilmoisturepercent);
  Serial.println("%");
}

void getpHValue() {
  digitalWrite(S0, HIGH); digitalWrite(S1, LOW); digitalWrite(S2, LOW); digitalWrite(S3, LOW);
  for(int i=0;i<10;i++)
  { 
    buf[i]=analogRead(SIG);
    delay(10);
  }
  for(int i=0;i<9;i++)
  {
    for(int j=i+1;j<10;j++)
    {
      if(buf[i]>buf[j])
      {
        temp=buf[i];
        buf[i]=buf[j];
        buf[j]=temp;
      }
    }
  }
  avgValue=0;
  for(int i=2;i<8;i++)
    avgValue+=buf[i];
  phValue=(float)avgValue*3.3/1024/6;
  phValue=3.5*phValue;
  
  Serial.print("pH Value: ");
  Serial.println(phValue);
}

void getTemperatureAndHumidityValue() {
  temperatureValue = dht.readTemperature();
  humidityValue = dht.readHumidity();
  
  Serial.print("Temperature: ");
  Serial.print(temperatureValue);
  Serial.print("C");
  Serial.print("Humidity: ");
  Serial.print(humidityValue);
  Serial.print("%");
}


void setup()
{
  Serial.begin(9600);
  Serial.println("");
  pinMode(S0, OUTPUT);
  pinMode(S1, OUTPUT);
  pinMode(S2, OUTPUT);
  pinMode(S3, OUTPUT);
  pinMode(SIG, INPUT);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi.");
}

void loop()
{
  getSoilMoistureValue();
  getpHValue();
  getTemperatureAndHumidityValue();

   // Create a JSON object to hold the sensor data
 String json = "{\"temperature\":" + String(temperatureValue) + ",\"humidity\":" + String(humidityValue) + ",\"soil_moisture\":" + String(soilmoisturepercent) + ",\"ph\":" + String(phValue) + "}";

// Send the data to the server
http.begin(wifiClient, serverUrl);
http.addHeader("Content-Type", "application/json");
int httpResponseCode = http.POST(json);
http.end();

Serial.print("HTTP Response code: ");
Serial.println(httpResponseCode);

// Wait for some time before taking another reading
delay(5000);
}
