module.exports = (app) => {
    app.get('/pagamentos', (req, res) => {
        return res.send('payfast');
    });

    app.post('/pagamentos/pagamento', (req, res) => {
       const pagamento = req.body;
       return res.send('ok'); 
    });
}