const express = require('express');
const app = express();

var port = process.env.PORT || 5000;

//routes
app.use(express.static(__dirname));

// index route
app.get('/', (res, req, next) => {
    res.render("index");
})

app.listen(port, () => {
    console.log("aa webpage server started")
})