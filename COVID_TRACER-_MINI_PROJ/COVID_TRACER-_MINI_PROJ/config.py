from pymongo import MongoClient


myclient = MongoClient('mongodb+srv://eldhopaulose0485:aleenaeldho_025@cluster0.4sjqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
print("Connected successfully!!!")
mydb = myclient["COVID_TRACER"]
mycol = mydb["Customers"]


