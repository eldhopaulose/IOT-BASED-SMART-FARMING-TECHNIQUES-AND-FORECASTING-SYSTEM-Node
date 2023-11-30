from pymongo import MongoClient

def py_db(): 
    try:
        conn = MongoClient('mongodb+srv://eldhopaulose0485:aleenaeldho_025@cluster0.4sjqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        print("Connected successfully!!!")
    except:  
        print("Could not connect to MongoDB")
    db = conn.mydatabase


