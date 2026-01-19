console.log(number1);
var number1 =3;
var number2 =2.9;
var number3 = 0xff;
console.log(number1 , number2 , number3);

var firstName = "John";
var middleName = "Doe";
var lastname = "Smith";
console.log(firstName,middleName,lastname)

var flag = true;
console.log(flag);

console.log(number4);
var number4 =5;

firstName[3]='A';
console.log(firstName);

console.log(typeof(number1),typeof(number2),typeof(number3),typeof(firstName),typeof(middleName),typeof(lastname));


var number5 = 5;
if(number5%2){
    console.log('odd number');
}else{
    console.log("even number")
}


for(var i=1;i<=10;i++){
    console.log(i);
}


var number6 = -11;
if(number6<0){
    console.log("negative number");
}else if(number6>0){
    console.log("positive number");
}else{
    console.log('zero')
}


var number7 = 4;
for(var i =0;i<=12;i++){
    console.log(`${number7}*${i} = ${number7*i}`);
}


var number8 = 2;
switch(number8){
    case 1 :
        console.log("Sat");
        break;
    case 2 :
        console.log("Sun");
        break;
    case 3 :
        console.log("Mon");
        break;
    case 4 :
        console.log("Tue");
        break;
    case 5 :
        console.log("Wed");
        break;
    case 6 :
        console.log("Thu");
        break;
    case 7 :
        console.log("Fri");
        break;
}


var number9 = 3;
if(number9 ==2 || number9 ==3||number9 ==4 || number9 ==5 ||number9 ==6){
    console.log("weekday");
}else{
    console.log("weekend");
}

console.log(number1.toString(2));
;