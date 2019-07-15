const api = require('./app');
var models = require("./models");
const app = api(models)
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
