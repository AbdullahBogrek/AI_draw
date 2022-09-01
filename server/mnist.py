from tensorflow import keras
from keras.models import Sequential, save_model, load_model
from keras.layers import Conv2D, MaxPooling2D, Dense, Dropout, Flatten, BatchNormalization
from keras.losses import categorical_crossentropy

from os import path

class NeuralNetwork:

    model = None

    def __init__(self, model_path = None):

        if model_path is not None:
            if path.isdir(model_path):
                self.load_model(model_path)
                return
            else:
                raise "Model dosyası bulunamadı. Lütfen ismi kontrol ediniz."

        self.model = Sequential()

        self.model.add(Conv2D(filters=64, kernel_size = (3,3), activation="relu", input_shape=(28,28,1)))
        self.model.add(Conv2D(filters=64, kernel_size = (3,3), activation="relu"))
        self.model.add(MaxPooling2D(pool_size=(2,2)))
        self.model.add(BatchNormalization())
        self.model.add(Conv2D(filters=128, kernel_size = (3,3), activation="relu"))
        self.model.add(Conv2D(filters=128, kernel_size = (3,3), activation="relu"))
        self.model.add(MaxPooling2D(pool_size=(2,2)))
        self.model.add(BatchNormalization())    
        self.model.add(Conv2D(filters=256, kernel_size = (3,3), activation="relu"))
        self.model.add(MaxPooling2D(pool_size=(2,2)))
        self.model.add(Flatten())
        self.model.add(BatchNormalization())
        self.model.add(Dense(512,activation="relu"))
        self.model.add(Dense(10,activation="softmax"))
        self.model.compile(loss='categorical_crossentropy', optimizer="adam", metrics=['acc'])
                    
        self.model.summary()    

    def train_model(self, X_train, y_train, X_test, y_test, epochs = 10, batch_size = 32):
        self.model.fit(X_train, y_train, 
                        batch_size=batch_size, 
                        epochs=epochs, 
                        validation_split=0.1,
                        validation_data=(X_test, y_test))

        _, acc = self.model.evaluate(X_test, y_test, verbose=0)
        print(f'The training was completed with {(acc * 100.0):.4f}% accuracy.')

    def save_model(self, file_name):
        try:
            save_model(self.model, file_name)
            print("Model başarılı bir şekilde kaydedildi.")
        except Exception as e:
            print('Bir hata meydana geldi: '+ str(e))


    def load_model(self, file_path):
        try:
            self.model = load_model(file_path)
            print("Model başarılı bir şekilde yüklendi.")
        except Exception as e:
            print('Bir hata meydana geldi: '+ str(e))
    
    def predict_model(self, vector):
        predict = self.model.predict(vector)
        return predict