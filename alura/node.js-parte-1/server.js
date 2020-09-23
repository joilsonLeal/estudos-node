const app = require('./src/config/custom-express');


app.get('/', (req, res) => {
    return res.json({ message: 'ok' });
})

app.listen(3000);