//palindrome
let string1=require("readline-sync")
var string=string1.question("enter the name : ")
// var new_string=""
// for (var i=string.length-1;i>=0;i--){
//     new_string+=string[i]   
// }
// console.log(new_string)
// if(string==new_string){
//     console.log("it is palindrome")
// }
// else{
//     console.log("it is not palindrome")
// }

var i=string.length-1
var str=""
while(i>=0){
   str=str+string[i]
   i=i-1

}
if (string==str){
    console.log("itis palindrome")
}
else{
    console.log("not palindrome")
}