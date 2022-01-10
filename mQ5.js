let name=require("readline-sync")
var name1=name.question("enetr the name : ")
new_string=""
for (i=name1.length-1;i>=0;i--){
    new_string+=name1[i]
}
if (name1==new_string){
    console.log ("it is palindrome")
}
else{
    console.log ("it is not palindrome")
}
