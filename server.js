const express = require("express");
const cors = require('cors')

const app = express()
app.disable('x-powered-by')
var corsOptionsDelegate = {
    "origin": '*',
    "methods": 'GET,POST,PUT,DELETE'
}

app.use(cors(corsOptionsDelegate));
// parse request of content - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for auth and user API
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync();

// router 
app.get("/", (req, res) => {
    res.json({message: "Chúc mừng mày đã fetch thành công truy vấn vào ClashOJ API xD"})
})

require('./app/routers/problems.route.js')(app);
require('./app/routers/auth.routes')(app);
require('./app/routers/user.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`ClashOJ API is running on ${PORT}`)
})