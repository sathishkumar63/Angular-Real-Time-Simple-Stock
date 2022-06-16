// https://medium.com/geekculture/how-to-easily-deploy-your-first-angular-app-on-heroku-65dd546c8181

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/stocks'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/stocks/index.html'));
});
app.listen(process.env.PORT || 8080);
