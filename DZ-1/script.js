var workingHourPrice = 75; //Стоимость рабочего часа

let workingDaysMonth = +prompt("Введите количество рабочих дней в текущем месяце");
let noWorkingDays = +prompt("Введите количество прогулов");

var priceWorkingDays = workingHourPrice*8; // Стоимость рабочего дня
var realyWorkingDays = workingDaysMonth-noWorkingDays; // Колличество отработанных дней


if  (noWorkingDays >= workingDaysMonth) {
    alert("Очень плохо :(");
    var payForMonth = 0;
    alert("Ваша зарплата в этом месяце составит: " + 0 + " грн");
    document.getElementById("money").innerHTML = payForMonth + ' грн';
    document.getElementById("money").className = "money3";
}
else {
    var payForMonth = realyWorkingDays*priceWorkingDays;
    alert("Ваша зарплата в этом месяце составит: " + payForMonth + " грн");
    document.getElementById("money").innerHTML = payForMonth + ' грн';
    document.getElementById("money").className = "money3";
}




