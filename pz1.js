'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    exp1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    exp2 = prompt("Во сколько обойдется?", ""),
    exp3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    exp4 = prompt("Во сколько обойдется?", "");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {
        a1: exp1,
        a2: exp2
    },
    optionalExpenses: null,
    income: null,
    savings: false
};

console.log(appData.expenses.a1 + " : " + appData.expenses.a2);
console.log("Бюджет за 1 день = ", appData.budjet / 30);