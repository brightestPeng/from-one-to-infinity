

new Promise(function(resolve,reject){
    setTimeout(()=>{
        alert("3秒");
        resolve();
    },3000)
})