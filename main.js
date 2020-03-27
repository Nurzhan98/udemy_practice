var money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
var appData = {
    budjet: money,
    timeData: time,
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: false
};

var a= prompt("Введите обязательную статью расходов в этом месяце", ""),
    a1 = +prompt("Во сколько обойдется?", ""),
    b= prompt("Введите обязательную статью расходов в этом месяце", ""),
    b1 = +prompt("Во сколько обойдется?", "");


appData.expenses.a = a1;
appData.expenses.b= b1;

var one_day = appData.budjet / 30;

alert("Ваш бюджет на один день:" + " " + one_day);
// Ответы на вопрос:
// 1) В JS есть 7 тип данных: number, string, boolean,  null, undefined, object, symbol
// 2) Что бы ввести информацию в консол надо вызвать функцию сonsole.log()
// 3) || логический "или", && логический "и"
