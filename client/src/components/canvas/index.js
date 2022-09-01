import { useEffect, useRef, useState } from 'react'

import axios from "axios"

import "./index.css"

function Canvas() {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    const [isDrawing, setIsDrawing] = useState(false)
    const [predictValue, setPredictValue] = useState("-")

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = 400
        canvas.height = 400
        
        const context = canvas.getContext("2d")
        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth = 5
        contextRef.current = context

        contextRef.current.fillStyle = "#ffffff"
        contextRef.current.fillRect(0, 0, 400, 400)
    }, [])

    const startDrawing = ({ nativeEvent }) => {
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()
        setIsDrawing(true)
        nativeEvent.preventDefault()
    }

    const draw = ({ nativeEvent }) => {
        if(!isDrawing) {
            return
        }

        const {offsetX, offsetY} = nativeEvent
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()
        nativeEvent.preventDefault()
    }

    const stopDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }
    
    const clearAll = () => {
        contextRef.current.fillStyle = "#ffffff"
        contextRef.current.clearRect(0, 0, 400, 400)
        contextRef.current.fillRect(0, 0, 400, 400)
    }
    
    const predict = async () => {
        let image = new Image()
        image.src = canvasRef.current.toDataURL()

        const formData = { image: image.src }

        axios.post("http://127.0.0.1:3005/predict", formData, {
            }).then((res) => {
                let result = String(res.data).slice(-3)
                setPredictValue(result)
        })

    }

    return (
        <div>
            <div className='container canvas-container'>
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                <div className="canvas-area shadow-lg rounded">
                                    <div className="canvas img-thumbnail">
                                        <canvas 
                                            id="canvas" 
                                            width="398" 
                                            height="398"
                                            ref = { canvasRef }
                                            onMouseDown = { startDrawing }
                                            onMouseMove = { draw }
                                            onMouseUp = { stopDrawing }
                                            onMouseLeave = { stopDrawing } >
                                        </canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <div className="prediction-area rounded">
                                    <div className="prediction rounded shadow-lg">
                                        <div className="row">
                                            <h4 className='d-flex justify-content-center align-items-center mt-3'>Prediction</h4>
                                        </div>
                                        <div className="row">
                                            <h1 className='prediction-result d-flex justify-content-center align-items-center'>{ predictValue }</h1>
                                        </div>
                                    </div>
                                    <div className="buttons rounded d-flex justify-content-center align-items-center shadow-lg">
                                        <button type="button" className="btn btn-success me-3" onClick={predict}>Predict</button>
                                        <button type="button" className="btn btn-danger" onClick={clearAll}>Clear</button>
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

export default Canvas