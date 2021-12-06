const express = require('express');

const Router = require("./router")

const app = express();
const port = process.env.PORT || 5000;


app.use('/birds', Router);


app.listen(port, () => console.log(`App listening on port ${port}!`));