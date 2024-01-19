const pushnotificationconroller=require("../controller/push-notifications.controller");
const express = require('express');
var router = express.Router();
// var bodyParser  = require('body-parser')
router.post("/send",pushnotificationconroller.sendNotificationToUser);
module.exports=router;
