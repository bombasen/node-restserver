require("./config/config")
const express = require('express')
const app = express()

const mongoose = require("mongoose");
const bodyParser = require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require("./routes/usuario"));


mongoose.connect("mongodb://localhost:27017/cafe", (error, resp) => {
    if (error) throw error;
    console.log("Conectado a la base de datos correctamente")
})
app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto 3000");
})