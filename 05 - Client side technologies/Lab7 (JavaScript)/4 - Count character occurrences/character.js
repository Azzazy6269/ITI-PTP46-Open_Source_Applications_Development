let count =0;
let str = prompt("Enter a string");
str = str.toLowerCase();
let ch = prompt("Enter a character")
ch = ch.toLowerCase();
for(let i=0; i<str.length;i++){
    if(ch===str[i])
        count++;
}
console.log(count);