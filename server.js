const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8008);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});