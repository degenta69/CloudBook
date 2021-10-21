const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/uploads', express.static('uploads'))

app.listen(port, () => {
  console.log(`CloudBook running at http://localhost:${port}`)
})