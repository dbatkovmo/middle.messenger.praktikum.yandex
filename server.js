const express = require('express');

const app = express();
const PORT = 3000;
const port = process.env.PORT || PORT;

app.use(express.static(`${__dirname}/dist`));

app.listen(port, () => {
    console.log(`Server http://localhost:3000/`);
});
