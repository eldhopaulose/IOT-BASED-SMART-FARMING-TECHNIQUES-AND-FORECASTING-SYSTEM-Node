
# import smtplib
# conn = smtplib.SMTP('imap.gmail.com',587)
# conn.ehlo()
# conn.starttls()
# conn.login('eldhopaulose2001@gmail.com', 'eldho_025')

# conn.sendmail('eldhopaulose2001@gmail.com','eldhopaulose0485@gmail.com','Subject: What you like? \n\n Reply Reply Reply')
# conn.quit()



import smtplib
sender = 'eldhopaulose0485@yandex.com'
re = 'eldhopaulose025@gmail.com'
password = 'oudfghivqeibasoa'
# message = """From: From Person <eldhopaulose0485@yandex.com>
# To: To Person <eldhopaulose0485@gmail.com>
# Subject: CV19 report

# This is a test e-mail message.
# """
server = smtplib.SMTP_SSL('smtp.yandex.com', 465)
# with server:  
#     server.ehlo()
    
#     server.login(sender , password)
#     # server.sendmail(sender ,re,message )

#     server.quit()
