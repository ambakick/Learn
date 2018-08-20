const express = require('express')
const app = express()

var path = require('path');
app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.use("/css",express.static(path.join(__dirname + '/css')))
app.use("/js",express.static(path.join(__dirname + '/js')))
app.use("/fonts",express.static(path.join(__dirname + '/fonts')))
app.use("/vendor",express.static(path.join(__dirname + '/vendor')))
app.use("/images",express.static(path.join(__dirname + '/images')))
app.get('/', (req, res) => res.sendFile((__dirname + '/index.html')));

app.listen(3030, () => console.log('Example app listening on port 3000!'))