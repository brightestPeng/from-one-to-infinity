const details = require("../controller/index");

module.exports = (router)=>{
  router.post("/getDetail",async (ctx)=>{
    const data = await details.getDetail(ctx);

    console.log(data);
    ctx.body = {
      data
    }
  })
}