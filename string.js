// let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(txt.length)

// let str = "Apple, Banana, Kiwi";
// // console.log(str.slice(7, 13))
// console.log(str.slice(-12,-6))


// let str = "Apple, Banana, Kiwi";
// console.log(str.substring(7))
// console.log(str.slice(-12,-6))

// let text = "PleasevisitMicrosoft!";
// console.log(text.replace("Microsoft", "W3Schools"))

// let text = "Microsoft!";
// let newText = text.replace(/SOFT/i, "W3Schools");
// console.log(newText)

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText)

// let text = "5";
// // let padded = text.padStart(4,1);
// let padded = text.padEnd(4,0);
// console.log(padded)
// let a="my name is pradnya"
// a="10/12/23"
// console.log (a.split("/"))
// let a="hello"
// console.log (a.split(""))

// let text = "Hello world";
// let result = text.endsWith("world");
// console.log (result)

// let text = "012345671234567";
// let result = text.lastIndexOf("567");
// console.log (result)

// let text1 = "cd";
// let text2 = "cd";
// let result = text1.localeCompare(text2);
// console.log (result)
var i=1
str=""
while (i<=5){
    var b=1
    while (b<=(5-i)){
        str=str+" "
        b++
    }
    var j=1
    while (j<=i){
        str=str+j
        j++
    }
    str=str+"\n"
    i++ 
}
console.log(str)