let num=require("readline-sync")
var num1=num.question("enter the number")
var sum=0
var z=num1
for (var num1;num1>0;){
    n=num1%10
    sum=sum+n
    num1=Math.floor(num1/10)
}
if (z%sum==0){
    console.log("it is harshad num")
}
else{
    console.log("it is not harshad num")
}