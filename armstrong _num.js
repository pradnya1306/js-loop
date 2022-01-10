let num=require("readline-sync")
var num1=num.questionInt("enter the number")
var z=num1
cube=0
while(num1>0){
    n=num1%10
    cube=cube+(n**3)
    num1=Math.floor(num1/10)
}
if (cube==z){
    console.log("it is armstrng number")
}
else{
    console.log("it is not armstrong number")
}