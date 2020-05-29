require.config({
  paths:{
    ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
  }
});

require(["ramda","jquery"],(_,$)=>{
  //作为跟踪函数
  var trace = _.curry(function(tag,x){
    console.log(tag,x);
    return x;
  });

  $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?tags=cats&format=json&jsoncallback=?",(response)=>{
    console.log(response);
  })
});