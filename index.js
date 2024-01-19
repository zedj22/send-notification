const express = require("express");
const app = express();
app.use(express.json());
app.use("/api", require('./routes/app.routes'));

const port = 3000;



app.listen(port, function () {
    console.log("ready to go");
}

)
