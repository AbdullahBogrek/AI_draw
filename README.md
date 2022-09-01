# AI_DRAW

<img src="AI_DRAW.gif" alt="Project show-off animation" width="60%"/>

## Description 

**AI Draw is a Node JS and React-based app to guess the number drawn on the canvas**. A CNN model trained with the MNIST dataset in the Python was used.

## Table of Contents

* [General Information](#general-information)
* [Technologies](#technologies)
    * [Frontend](#frontend)
    * [Backend](#backend)
    * [Model Training](#model-training)
* [Setup](#setup)
* [Acknowledgements](#acknowledgements)
    * [To Do](#to-do)
* [Contact](#contact)
* [License](#license)

## General Information

This project was developed to learn and apply how artificial intelligence models are used in web projects. The CNN model created using Python was trained with the MNIST dataset. The data set was obtained using the Keras library. Data were scaled and standardized for the model. Then, the functions of saving and loading the model were created together with the CNN model. 

After the model training was completed, the backend and frontend of the project were created. The 400x400 pixel image drawn on the canvas by the user is sent to the server. On the server side, this image is saved to the uploads folder and reshaped to 26x26 pixels for model estimation. Then the number given as input to the trained model is estimated and the answer is returned. The returned response is sent to React and printed to the screen.

## Technologies

### Frontend
- React             - v18.1.0
- Bootstrap         - v5.1.3
- Axios             - v0.27.2

### Backend
- Node JS           - v16.17.0
- Express           - v4.18.1
- Cors              - v2.8.5
- Fs                - v0.0.1

### Model Training
- Python            - v3.10.6
- Tensorflow        - v2.9.1
- Keras             - v2.9.0
- Pandas            - v1.4.3
- Numpy             - v1.23.2
- OpenCV            - v4.6.0

## Setup

1) Train the model by running the `./server/predict.py` file. You can change the number of epochs in the train.py file if you want.

2) The server must be run using:

    ```cmd
    > cd .\server
    > npm install
    > npm start
    ```

3) The client must be run using:

    ```cmd
    > cd .\client
    > npm install
    > npm start
    ```

## Acknowledgements

- The project is generally finished. All functions are working. But it will continue to be developed. Feel free to contact me for any ideas or criticism.
 
### To Do

- Feature the dark theme
- Speeding up the forecast time
- Estimate range from digit to number
- Image enhancement to further increase the model success

## Contact

Created by [@Abdullah Böğrek](https://tr.linkedin.com/in/abdullah-s-bogrek) - feel free to contact me!

Mail: asbogrek@gmail.com

## License

This project is open source and available under the [MIT](https://opensource.org/licenses/MIT).