const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const adminRoute = require('./src/routes/admin');
const shopRoute  = require('./src/routes/shop');

// path 
let admin = '/admin';

app.use(bodyParser.urlencoded({extended:false}));
app.use(shopRoute);
app.use(admin,adminRoute);

app.use((req,res,next) => {
    res.status(404).send(`<h2>Page Not Found :( </h2>`);
});

app.listen(5000);