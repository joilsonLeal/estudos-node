module.exports = (app) => {
    app.get('/pagamentos', (req, res) => {
        return res.send('payfast');
    });
}