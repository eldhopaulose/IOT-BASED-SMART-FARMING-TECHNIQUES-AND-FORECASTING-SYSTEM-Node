import requests


# Set the API endpoint and your API key

api_key = "922b683390682c3adfabb94e2a7251ce"


# Set the location for which you want weather data (latitude and longitude)
lat = '9.9772'
lon = '76.2773'
city = 'Marine Drive'
endpoint = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}"

# Set the parameters for the API request
# Send the API request and retrieve the response
response = requests.get(endpoint)

# Print the temperature in Fahrenheit
data = response.json()
# print(data)
temp = data["main"]["temp"]
hum = data['main']["humidity"]
conditions = data["weather"][0]["description"]

# Get the wind speed in meters per second
wind_speed = data["wind"]["speed"]

# Get the wind direction in degrees
wind_deg = data["wind"]["deg"]


print(f"The current temperature is {temp:.1f}°F.")
print(f"The humidity is {hum}%.")
if "rain" in conditions.lower():
  print(f"It is currently raining in {city}.")
else:
  print(f"It is not currently raining in {city}.")



# Convert the wind direction to a compass direction
compass_dir = ""
if wind_deg > 337.5 or wind_deg <= 22.5:
  compass_dir = "N"
elif wind_deg > 22.5 and wind_deg <= 67.5:
  compass_dir = "NE"
elif wind_deg > 67.5 and wind_deg <= 112.5:
  compass_dir = "E"
elif wind_deg > 112.5 and wind_deg <= 157.5:
  compass_dir = "SE"
elif wind_deg > 157.5 and wind_deg <= 202.5:
  compass_dir = "S"
elif wind_deg > 202.5 and wind_deg <= 247.5:
  compass_dir = "SW"
elif wind_deg > 247.5 and wind_deg <= 292.5:
  compass_dir = "W"
elif wind_deg > 292.5 and wind_deg <= 337.5:
  compass_dir = "NW"

# Print the wind information
print(f"The wind in {city} is currently blowing at {wind_speed} meters per second from the {compass_dir}.")
print(f"The conditions are {conditions}")