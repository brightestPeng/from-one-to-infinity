const https = require("https");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

module.exports = {
  getDetail: async (ctx, next) => {
    const { url } = ctx.request.body;
    console.log("url");
    https.get(url,async (res) => {
      let chunks = [];
      let size = 0;
      res.on("data", (chunk) => {
        chunks.push(chunk);
        size += 1;
      });
      res.on('end',()=>{

        try {
          const data = iconv.decode(Buffer.from(chunks),"gbk")
          console.log(data);
          const $ = cheerio.load(data);
          let args = [];
    
  
          $(".dw_table").find(".el").each(function(){
            let work = $(this).find(".t1 a").attr("title");
            console.log(work);
            if(work){
              console.log(work);
            }
          })
        } catch (error) {
          console.log(error);
        }

      })
    });
  },
};
