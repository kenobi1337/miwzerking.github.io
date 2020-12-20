const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
//app.use(helmet());
//app.use(cors());


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(PORT, () => console.log(`listenning on port ${PORT}`));