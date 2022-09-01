import pandas as pd
import numpy as np
import cv2
import sys

from mnist import NeuralNetwork

def read_img(image_path):

    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE) / 255
    img = cv2.resize(img,(28,28) , interpolation = cv2.INTER_AREA)
    img = img.reshape(1,28, 28, 1)
    return img

img_path = str(sys.argv[1])

readed_image = read_img(img_path)

neural_network = NeuralNetwork()
neural_network.load_model("model_trained_w_50_epochs")

predict_result = neural_network.predict_model(readed_image)
predict_result = np.argmax(predict_result)

print(predict_result)