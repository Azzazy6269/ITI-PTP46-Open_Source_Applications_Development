let date1 = prompt("enter a date");
function isDate(_date){
    if(_date.length!=10 || _date[2]!='-' || _date[5]!='-'){
        return false;
    }
    let AsNum = Number(_date.slice(0,2));
    if(AsNum>31)
        return false;
     AsNum = Number(_date.slice(3,5));
    if(AsNum>12)
        return false;
    return true;
}
function dayName(_date){
    if(isDate(_date)){
        let day=Number(_date.slice(0,2));
        let month=Number(_date.slice(3,5));
        let year=Number(_date.slice(6,10));
        let date = new Date(year,month-1,day);
        let dayIndex=Number(date.getDay());
        switch (dayIndex){
            case 6 :
                console.log("sat");
                break;
            case 0 :
                console.log("sun");
                break;
            case 1 :
                console.log("mon");
                break;
            case 2 :
                console.log("tue");
                break;
            case 3 :
                console.log("wed");
                break;
            case 4 :
                console.log("thu");
                break;
            case 5 :
                console.log("fri");
                break;
        }
    }else{
        console.log("it is not a date");
    }

}

function calcAge(_date) {
    if (isDate(_date)) {
        let birthDay = Number(_date.slice(0, 2));
        let birthMonth = Number(_date.slice(3, 5));
        let birthYear = Number(_date.slice(6, 10));

        let today = new Date();
        let nowDay = today.getDate();
        let nowMonth = today.getMonth() + 1; 
        let nowYear = today.getFullYear();

        let years, months, days;
        years = nowYear - birthYear;

        months = nowMonth - birthMonth;
        if (months < 0) {
            years--;
            months += 12;
        }

        days = nowDay - birthDay;
        if (days < 0) {
            months--;
            if (months < 0) {
                months = 11;
                years--;
            }
            let lastMonth = new Date(nowYear, nowMonth - 1, 0).getDate();
            days += lastMonth;
        }

        console.log(`${years} , ${months} , ${days}`);
    } else {
        console.log("invalid date");
    }
}

if(isDate(date1)){
    console.log("it's a date");
    let day=Number(date1.slice(0,2));
    let month=Number(date1.slice(3,5));
    let year=Number(date1.slice(6,10));
    let date2 = new Date(year,month-1,day);
    console.log(date2);
}else{
    console.log("it is not a date");
}

dayName(date1);

calcAge(date1);



