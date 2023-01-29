const path       = require('path');
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const adminRoute = require('./routes/admin');
const shopRoute  = require('./routes/shop');
const rootDir    = require('./util/path');
// path 
let admin = '/admin';

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,'public')))
app.use(shopRoute);
app.use(admin,adminRoute);
'./src/views/'
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404_page.html'));
});

app.listen(5000);