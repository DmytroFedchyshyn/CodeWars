function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && new Date(currentDate).getTime() <= new Date(expirationDate).getTime();
}

function betterCheckCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  //  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  //  false