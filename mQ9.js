
// 10+16+9+10+56+78+98+43+21+76.. 
let num=require("readline-sync")
sum=0
for (var i=1;i<=10;i++){
    num1=num.questionInt("enter the number")
    sum=sum+num1

}
console.log(sum)