this.a = 10;

var obj = {
    a:20,
    c:this.a,
    getA:function(){
        console.log(this.a);
    }
}

console.log(obj.c);
console.log(obj.getA());