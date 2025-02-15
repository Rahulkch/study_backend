const express = require("express");
const router = express.Router();

const {add,get,del}=require("../controller/create");



router.post("/add",add);
router.get("/get",get);
router.delete("/del/:_id",del)








module.exports=router;