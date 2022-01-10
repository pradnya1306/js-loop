let num=require("readline-sync")
var num1=num.questionInt("enter the number")
var real=num1
var sum=0
var i=1
while (i<num1){
    sum=sum+(num1%i==0)
    i++
}
if (sum==real){
    console.log(" it is  perfect num")
}
else{
    console.log("it is not perfect num")
}