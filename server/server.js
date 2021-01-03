require('dotenv').config({
    path:'config/.env'
});

const express = require('express');
const bodyParser = require('body-parser');
const _  = require('lodash');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT;
app.listen(PORT,function(err){

    if(err)
     console.log(err);
    else
     console.log(`Server running on port ${PORT}`);
});