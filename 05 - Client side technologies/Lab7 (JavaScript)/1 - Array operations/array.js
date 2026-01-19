let size =-1;
while(size<=0 || Number.isNaN(size)){
    size = Number(prompt("Enter size of array : "));
}
let arr =[]
while(size>0){
    let element  = Number(prompt("Enter new elemet"));
    if(Number.isNaN(element)){
        console.log("invalid value . please try again");    
    }else{
        arr.push(element);
        size--;
    }
}
console.log(arr);
while(true){
let choose = prompt("a-Display the array in the same order it was entered\nb-Display the array in ascending order\nc-Disply the array in descending order \nd-Display the reversed version of the original array\ne-Display only even numbers from the array \nf-show only numbers that divisible by n\ng-Display a new array where all numbers have a 30% discount applied\nh-Display a string of all numbers");
switch(choose){
    case 'a':
        arrDisplay();
        break;
    case 'b':
        arrDisplayAsc();
        break;
    case 'c':
        arrDisplayDesc();
        break;
    case 'd':
        arrReverse();
        break;
    case 'e':
        arrIsEven();
        break;
    case 'f':
        DivisibleByN();
        break;
    case 'g':
        DiscountBy30();
        break;
    case 'h':
        DisplayString();
        break;
    default:
        console.log("Invalid choice, try again");
}
}

function arrDisplay(){
    console.log(arr);
}
function arrDisplayAsc(){
    let newArr =[...arr];
    newArr.sort((a,b)=>a-b);
    console.log(newArr);
}
function arrDisplayDesc(){
    let newArr =[...arr];
    newArr.sort((a,b)=>b-a);
    console.log(newArr);
}
function arrReverse(){
    let newArr =[...arr];
    newArr.reverse();
    console.log(newArr);
}
function arrIsEven(){
    let newArr = [];
    for(let i = 0;i<arr.length;i++){
        if(!arr[i]%2){
            newArr.push(arr[i]);
        }
    }
    if(newArr.length>0){
        console.log(newArr);
    }else{
        console.log("There's no even numbers");
    } 
}
function DivisibleByN(){
    let n=-1;
    while(n<=0 || Number.isNaN(n)){
    n = Number(prompt("Enter a number : "));
    }
    let newArr = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%n==0){
            newArr.push(arr[i]);
         }
    }
    if(newArr.length>0){
        console.log(newArr);
    }else{
        console.log(`There's no divisible by ${n} numbers `);
    } 
}
function DiscountBy30(){
    let newArr=[];
        for(let i = 0;i<arr.length;i++){
            newArr.push(arr[i]*.7);
        }
    console.log(newArr);
}
function DisplayString(){
    console.log(arr.join('*'));
}



