// prime or not
// let num=require("readline-sync")
// var num1=num.questionInt("enetr the number")
// var count=0;
// for (var i=1;i<=num1;i++){
//     if (num1%i==0){
//         count=count+1
//     }
// }
// if (count==2){
//     console.log(num1,"it is prime number")
// }
// else{
//     console.log(num1,"it is not prime number")
// }


let num=require("readline-sync")
var num2=num.questionInt("enetr the star number : ")
var num1=num.questionInt("enetr the end number : ")
for (var j=num2;j<=num1;j++){
    var count=0;
    for (var i=1;i<=j;i++){
        if (j%i==0){
            count=count+1
    }
}
if (count==2){
    console.log(j,"it is prime number")
}
else{
    console.log(j,"it is not prime number")
}
}


