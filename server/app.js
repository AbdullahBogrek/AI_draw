import express from "express"
import cors from "cors"
import fs from "fs"
import { spawn } from "node:child_process"

const app = express()
const port = 3005

const corsOptions ={
  origin:'*', 
  credentials:true,           
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/predict', (req, res) => {
    const base64Image = req.body.image
    const path = './uploads/'+Date.now()+'.png'
    const base64Data = base64Image.replace(/^data:([A-Za-z-+/]+);base64,/, '');
    console.log()
    fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
    console.log(path)

    const Python = spawn("python", ["./predict.py", path])

    let processed_data = ''

    Python.stdout.on("data", (data) => {
      processed_data = data.toString();
      console.log(`${processed_data}`)
    })

    Python.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`)
    })

    Python.on("close", (code) => {
      console.log(`Child process exited with code ${code}`)
      res.send(processed_data)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})