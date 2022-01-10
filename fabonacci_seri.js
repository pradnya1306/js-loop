let num=require("readline-sync")
var num1=num.questionInt("enter the number")
var x=0
var y=1
var z=0
while (z<=num1){
    console.log(z)
    x=y
    y=z
    z=x
    z=x+y
    
}