const details = require("../controller/index");

module.exports = (router)=>{
  router.post("/getDetail",details.getDetail)
}