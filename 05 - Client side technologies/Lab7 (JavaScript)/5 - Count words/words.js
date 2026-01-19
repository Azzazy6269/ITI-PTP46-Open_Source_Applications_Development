let count = 0;
let str = prompt("enter a string");
str = str.trim();
if(str.length>0)
    count++;
for(let i=2;i<str.length;i++){
    if(str[i]!==' ' &&str[i-1]===' ')
        count++;
}
console.log(count);