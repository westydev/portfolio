const express = require(`express`)
const ejs = require(`ejs`)
require(`./src/Startup`).Startup()
const app = express();
const path = require(`path`)

const { BOT, DATABASE, WEBSITE } = require(`./src/settings/Config`)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

const index = require(`./src/routers/index.js`)
app.use('/', index);

app.listen(WEBSITE.port, async () =>
      console.log(`Website ${WEBSITE.port} Portundan Başarıyla Açıldı.`)
);