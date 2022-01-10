let num=require("readline-sync")
var num1=num.questionInt(" enter the number")
var num2=num.questionInt("enter the number")
var sum=0
for (var i=num1;i<=num2;i++){
    sum=sum+i
    console.log(sum)
}
console.log(sum)