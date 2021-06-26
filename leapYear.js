function isLeapYear(year) {
    const remainder = year % 4;
    if(remainder == 0) {
        return true;
    }

    else{
        return false;
    }
}   

const cheak2000 = isLeapYear(2201);
console.log(cheak2000);
