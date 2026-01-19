let str = prompt("Enter a string");
str = str.trim();
if(str.length>0){
    str = str[0].toUpperCase()+str.slice(1);
}
for(let i =1;i<str.length;i++){
    if(str[i]!==' ' && str[i-1]===' '){
        str =str.slice(0,i-1)+" "+ str[i].toUpperCase() +str.slice(i+1);
    }
}
console.log(str);