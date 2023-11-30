from unicodedata import name
import cv2

cam = cv2.VideoCapture(0)
def get_frame():
    ret, frame = cam.read()
    if not ret:
        return None
    return cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

def release():
    cam.release()
    cv2.destroyAllWindows()