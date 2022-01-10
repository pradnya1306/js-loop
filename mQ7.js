let num=require("readline-sync")
var num1=num.questionInt(" enter the number")
var num2=num.questionInt("enter the number")
for (var i=num1;i<=num2;i++){
    if (i%7==0){
        console.log(i)
    }
    
}