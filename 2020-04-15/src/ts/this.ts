//this 参数

interface Card{
  title:string,
  card:number
}

interface Deck{
  suits:string[];
  cards:number[],
  createCardPicker(this:Deck):()=>Card //显式传递this 
}

// this在对象中

let deck:Deck = {
  suits:["a",'b',"c"],
  cards:[1,2,3],
  createCardPicker:function(this:Deck ){
    return ()=>{  //显式传递this 
      return {
        title:this.suits[1],
        card:0
      }
  }
  }
}

class Handler{
  info:string;
  constructor(info:string){
    this.info =info
  }
  //生成在构造函数中
  onClickHandle= ()=>{
    //可以保留this 
    this.info = "666"
  }
  //生成在对象的原型中,作为回调函数不能保留this
  onClickHandle1(){
  }
}

// this在回调函数中
interface UIElement{
  addClickListener(onclick:(this:void)=>void):void
}

//重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x:{ suit:string;card:number}[]):number
function pickCard(x:number):{ suit:string;card:number}
function pickCard(x:any):any{
  if(typeof x === "object"){
    let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
  }else if(typeof x === "number"){
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

