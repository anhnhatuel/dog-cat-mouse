function Cat(){
    return;
}
Cat.prototype.eat=function(mouse) {
    this.stomatch.push(mouse);
}
//An map vl
module.exports=Cat;