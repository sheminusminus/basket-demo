const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public'), {
  index: 'index.html',
  redirect: false,
}));

// serve the index.html over all unmatched Routes.js
app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => console.log('The magic happens at port 3000'));
