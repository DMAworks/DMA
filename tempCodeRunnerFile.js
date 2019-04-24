let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


let	c = prompt("Введите обязательную статью расходов в этом месяце", ''),
	d = prompt("Во сколько обойдется?", '');

appData.expenses.a = b;
appData.expenses.c = d;

for(let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
		console.log("Done!");
		appData.expenses[a] = b;
	}
	
}

alert(appData.budget / 30);