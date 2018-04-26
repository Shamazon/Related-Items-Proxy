const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 8008);
app.use(express.static('public'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});