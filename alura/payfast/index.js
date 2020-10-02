const custonExpress = require('./config/custon-express');
const tables = require('./infra/Tables');
const db = require('./infra/connectionFactory');

tables.init(db);

const app = custonExpress();

app.listen(3000);