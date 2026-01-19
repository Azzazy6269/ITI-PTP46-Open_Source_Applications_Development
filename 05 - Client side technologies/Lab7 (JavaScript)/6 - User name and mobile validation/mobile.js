var name ;
while(true){
    name = prompt("Enter username");
    var nameAsNum=Number(name);
    if(Number.isNaN(nameAsNum))
        break;
}

let phone ="";
while(true){
    phone = prompt("Enter phone number");
    if(phone.length==11&& phone[0]==='0' && phone[1]==='1' && (phone[2]==='0'||phone[2]==='1'||phone[2]==='2'||phone[2]==='5')){
        break;
    }
}


let NatonialPhone = "";

while (true) {
    NatonialPhone = prompt("Enter phone number in international format ");

    if (NatonialPhone.length === 14 && NatonialPhone.slice(0,5)=="00201" && (NatonialPhone[5] === '0' || NatonialPhone[5] === '1' || NatonialPhone[5] === '2'|| NatonialPhone[5] === '5')) {
        break;
    }
}

