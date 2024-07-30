const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8001;

app.get('/test', (req, res)=> {
    res.send({message:'test successful'})
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})