var money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();
var appData = {
    budjet: money,
    timeData: time,
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
        for (var i = 0; i < 2; i++ ) {
            var a= prompt("Введите обязательную статью расходов в   этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
            if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                console.log("Done!", "");
                appData.expenses[a] = b;
            } else {
                i = i-1;
            }
        }
    },
    detectDayBudjet: function() {
        appData.moneyPerday = (appData.budjet / 30).toFixed();
        alert("Ваш бюджет на один день:" + " " + appData.moneyPerday);
    },
    detectLevel: function() {
        if(appData.moneyPerday < 100) {
            console.log("Минимальный уровень достатка", "");
        }   else if (appData.moneyPerday > 100 && appData.moneyPerday < 2000) {
            console.log("Средынй уровень достатка", "");
        }   else if (appData.moneyPerday < 2000) {
            console.log("Высокый уровень достака", "");
        }   else {
            console.log("Error", "");
        }  
    },
    chechSavings: function() {
        if (appData.savings == true) {
            var save = +prompt("Какого сумма накопленний", ""),
                percent = +prompt("Под какой процент", "");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего бюджета: " + appData.monthIncome);
    
        }
    },
    chooseOptExpenses: function() {
        for (var i = 0; i < 3; i++) {
            var opt = prompt("Статья необязательных расходов", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        var items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что то еще", ""));
        appData.income.sort();
    }
};

