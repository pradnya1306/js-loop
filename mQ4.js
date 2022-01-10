// table
// let num=require("readline-sync")
// var num1=num.questionInt("enter the number")
// var i=1
// while (i<=10){
//      console.log(num1*i)
//      i++
//  }

let num=require("readline-sync")
var num1=num.questionInt("enter the number")
var num2=num.questionInt("enter the number")
var j=num1
str=""
while (j<=num2){
    var i=1
    while (i<=10){
        result=j*i
        console.log(j+"*"+i+"="+result)
        i++
    }
    console.log(" ")
    j+=1
}
