let express = require("express");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to my Express server.');
});

app.get('/about',(req,res) => {
    res.send('This is the about page of my Express server.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});