import photo
from tkinter import *
import threading
import PIL.Image
import PIL.ImageTk
import cv2
import time
import imagekit_config

top = Tk()

name_var = StringVar()
mobile_var = StringVar()
temp_var = StringVar()
temp_var.set("21")  # for sample default value
imageFrame = None
updater = None


def update_canvas():
    global photo, imageFrame, updater
    frame = photo.get_frame()
    imageFrame = frame
    img = PIL.ImageTk.PhotoImage(image=PIL.Image.fromarray(frame))
    panel.configure(image=img)
    panel.image = img
    updater = top.after(10, update_canvas)


def retry():
    retry_button["state"] = "disabled"
    complete_label.grid_forget()
    update_canvas()


retry_button = Button(top, text='Retry', command=retry,
                      font=('calibre', 10, 'normal'))
retry_button.grid(row=3, column=1, padx=50, pady=15, columnspan=2, sticky=W)
retry_button["state"] = "disabled"
complete_label = Label(top, text="Completed!", font=(
    'calibre', 20, 'normal'), fg="green")
complete_label.grid(row=4, column=1, padx=50, pady=15, columnspan=2)
complete_label.grid_forget()


def after_done():
    retry_button["state"] = "normal"
    complete_label.grid(row=4, column=0, padx=50,
                        pady=15, columnspan=2, sticky=W)


def submit_data():
    top.after_cancel(updater)
    img_name = "./images/capture_{}.png".format(time.time() * 1000)
    cv2.imwrite(img_name, imageFrame)
    print("{} written!".format(img_name))
    url = imagekit_config.upload(img_name)
    after_done()
    values = {
        "name": name_var.get(),
        "mobile": mobile_var.get(),
        "temp": temp_var.get(),
        "image": url
    }
    print(values) # Getting the all values for databsase storage


name_label = Label(top, text='Full Name: ', font=('calibre', 10, 'bold'))
name_label.grid(row=0, column=0, sticky=W)
name_entry = Entry(top, textvariable=name_var, font=('calibre', 10, 'normal'))
name_entry.grid(row=0, column=1, padx=5, pady=5, sticky=W)
mobile_label = Label(top, text='Mobile No.: ', font=('calibre', 10, 'bold'))
mobile_label.grid(row=1, column=0, sticky=W)
mobile_entry = Entry(top, textvariable=mobile_var,
                     font=('calibre', 10, 'normal'))
mobile_entry.grid(row=1, column=1, padx=5, pady=5, sticky=W)
temp_label = Label(top, text='Temprature: ', font=('calibre', 10, 'bold'))
temp_label.grid(row=2, column=0, sticky=W)
temp_entry = Entry(top, textvariable=temp_var, font=('calibre', 10, 'normal'))
temp_entry.grid(row=2, column=1, padx=5, pady=5, sticky=W)
capture_button = Button(top, text='Capture image & Submit',
                        command=submit_data, font=('calibre', 10, 'normal'))
capture_button.grid(row=3, column=0, padx=50, pady=15, sticky=N)
panel = Label(top, image=None)
panel.grid(row=5, column=0, columnspan=2, padx=10, pady=10)

update_canvas()
top.mainloop()
