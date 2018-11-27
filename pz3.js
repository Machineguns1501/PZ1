'use strict';

let money, time;


function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};


function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
			a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
			//a - свойство объекта expenses, b - значение
		} else {
			alert("Вы забыли ввести статью расходов, попробуйте ещё раз");
			i--;
		}
	}
}

chooseExpenses();


function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();//округление до целых с помощью методжа toFixed
	alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Максимальный уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}	
}

detectLevel();


function chooseOptExpenses() {
	for (let i = 1; i < 4; i++) {
		let c = +prompt("Во сколько обойдется статья необязательных расходов?", '');
		
		while(isNaN(c) || c == '' || c == null) {
			c = +prompt("Во сколько обойдется статья необязательных расходов?", '');
		}

		console.log("doneOpt");
		appData.optionalExpenses[i] = c;	
	}
}

chooseOptExpenses();


function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");
		
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();