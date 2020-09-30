module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('<h1>Atendimentos</h1>')
    });
}