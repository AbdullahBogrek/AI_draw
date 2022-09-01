import React from 'react'
import "./index.css"

function Accordion() {
  return (
    <div>
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-8' >
                    <div className="accordion accordion-flush p-3 mb-5 bg-body rounded" id="accordionFlush1">
                        <div className="accordion-item shadow-lg">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Click to see the CNN structure used in model training.
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush1">
                                <div className="accordion-body">
                                <table class="table  table-striped table-hover table-borderless">
                                    <thead class="table-secondary">
                                        <tr>
                                            <th colspan="4">Model: "sequential"</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#</td>
                                            <td>Layer (type)</td>
                                            <td>Output Shape</td>
                                            <td>Param #</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>conv2d (Conv2D)</td>
                                            <td>(None, 28, 28, 32)</td>
                                            <td>832</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>max_pooling2d (MaxPooling2D)</td>
                                            <td>(None, 14, 14, 32)</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>dropout (Dropout)</td>
                                            <td>(None, 14, 14, 32)</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>dropout (Dropout)</td>
                                            <td>(None, 14, 14, 32)</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>conv2d_3 (Conv2D)</td>
                                            <td>(None, 14, 14, 64)</td>
                                            <td>36928</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>max_pooling2d_1 (MaxPooling2)</td>
                                            <td>(None, 7, 7, 64)</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>dropout_1 (Dropout)</td>
                                            <td>(None, 7, 7, 64)</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>flatten (Flatten)</td>
                                            <td>(None, 3136)</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>dense (Dense)</td>
                                            <td>(None, 1024)</td>
                                            <td>3212288</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>dropout_2 (Dropout)</td>
                                            <td>(None, 1024)</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>dropout_2 (Dropout)</td>
                                            <td>(None, 1024)</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td>dense_1 (Dense)</td>
                                            <td>(None, 10)</td>
                                            <td>10250</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4" className='pt-3'>Total params: 3,304,426 Trainable params: 3,304,426 Non-trainable params: 0</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion