let num=require("readline-sync")
var  num1=num.questionInt("enter the number")
var z=num1
sum=0
while(num1>0){
    n=num1%10
    fact=1
    i=1
    while (i<=n){
        fact=fact*i
        i++
    }
    sum=sum+fact
    num1=Math.floor(num1/10)  
}
console.log(sum)
if (sum==z){
    console.log("it is storng number")
}
else{
    console.log("it is not strong number")
}