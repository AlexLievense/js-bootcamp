let myAccount = {
    name: 'Alex Lievense',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// addIncome
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    return `Account owner: ${account.name}        
    Income: \t${account.income}
    Expenses: \t${account.expenses}
    ---------------- -
    Balance:\t${account.income - account.expenses}`
}

addIncome(myAccount, 500)
addExpense(myAccount, 800)
console.log(getAccountSummary(myAccount))