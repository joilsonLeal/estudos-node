const express = require('express');

const app = express();


app.get('/atendimentos', (req, res) => {
    res.send('<h1>Atendimentos</h1>')
});



app.listen(3000, () => console.log('Server is running...'));