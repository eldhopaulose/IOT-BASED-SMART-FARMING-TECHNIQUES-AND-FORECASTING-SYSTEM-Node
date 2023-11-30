from twilio.rest import Client 
 
account_sid = 'AC319a1d021002d7743e18443e49c0eaef' 
auth_token = 'c160dd02340757f71129ecb91e93dd6d' 
client = Client(account_sid, auth_token) 
 
# client.messages.create(  
#                               messaging_service_sid='MG53d82a72162bbd2812d659a179ac893d', 
#                               body='hellow123',      
#                               to='+918078466527' 
#                           ) 
