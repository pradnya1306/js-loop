let num=require("readline-sync")
var num1=num.questionInt("enter the number")
var num2=num.questionInt("enter the number")
for (var i=num1;i<=num2;i++){
    if (i%3==0 && i%7==0){
        console.log("navguryukul")
    }else if(i%3==0){
        console.log("nav")
    }else if(i%7==0){
        console.log("gurukul")
    }else{
        console.log(i)
    }
}