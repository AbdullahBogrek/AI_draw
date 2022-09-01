import pandas as pd
import numpy as np

from keras.utils import np_utils
from keras.datasets import mnist

from mnist import NeuralNetwork

(X_train, y_train), (X_test, y_test) = mnist.load_data()

# Normalization 
X_train = X_train.astype("float32") / 255
X_test = X_test.astype("float32") / 255

# Shaping
X_train = np.expand_dims(X_train, -1)
X_test = np.expand_dims(X_test, -1)

# Label Encoding
y_train = np_utils.to_categorical(y_train, 10)
y_test= np_utils.to_categorical(y_test, 10)

# Neural Network
neural_network = NeuralNetwork()
neural_network.train_model(X_train, y_train, X_test, y_test, 50)

neural_network.save_model("model_trained_w_50_epochs")