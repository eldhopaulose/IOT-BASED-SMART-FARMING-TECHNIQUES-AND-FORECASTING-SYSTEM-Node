from pymongo import MongoClient
import pandas as pd
import os

def getData():
    # Set up MongoDB connection
    client = MongoClient('mongodb+srv://eldhopaulose0485:xyzel_025@cluster0.4sjqm.mongodb.net/NodeMcu?retryWrites=true&w=majority')
    db = client['NodeMcu']
    sensor_collection = db['sensors']

    # Define the filename for the CSV file
    filename = 'sensor_data.csv'

    # Check if the file exists
    file_exists = os.path.isfile(filename)

    # Fetch the sensor data
    try:
        # Find all documents in the collection
        sensor_data = list(sensor_collection.find())

        print('Found the following documents:')
        print(sensor_data)

        # Convert the data to a pandas DataFrame
        df = pd.DataFrame(sensor_data)

        df.to_csv(filename, mode='a', header=not file_exists, index=False)

    except Exception as e:
        print('Error fetching and saving sensor data:', e)
