const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('cors')())

app.use('/api', require('./api'));

const router = express.Router()
app.use(express.static(`${__dirname}/views`))

router.get('/*', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`)
})

app.use('/', router)

app.listen( PORT, () => {
    console.log( `listen to port ${PORT}`)
})