const express = require('express')
const cors = require('cors');

const app = express();
app.use(cors())
app.get('/', (req, res) => {
    res.send('Welcome')
})
app.get('/data', (req, res) => {
    res.status(200).json({
        name:'John Doe',
        age: 24
    })
})

app.listen(4000, () => { console.log('Server Running...')})