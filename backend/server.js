const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
app.use(bodyParser.json())
const PORT = 3000

let storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

let upload = multer({storage: storage})

app.post('/dashboard/upload', upload.single('file'), (req, res) => {
    // upload(req, res, (err) => console.log(err))
    res.send('File Uploaded')
    res.sendFile(req.file)
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})