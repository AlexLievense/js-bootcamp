const account = {
    name: 'Alex Lievense',
    income: [],
    expenses: [],
    // method that sorts an input array from high to low if argument is true, otherwise from low to high
    sortByAmount: function(array, highToLow){
        array.sort(function (a, b){
            if (a.amount > b.amount){
                if (highToLow) return -1    // if sorting from high to low, a higher amount should come before a lower amount
                else return 1               // else, the higher amount should come after the lower amount
            }
            if (a.amount < b.amount){
                if (highToLow) return 1
                else return -1
            }
            return 0
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let summary = `Owner: ${this.name}`
        this.sortByAmount(this.income, true)
        this.sortByAmount(this.expenses, true)
        
        // Create expense summary
        let expenseSummary = ''
        let totalAmountOfExpenses = 0
        
        this.expenses.forEach(function(expense) {
            expenseSummary += `\n\t${expense.amount}:\t${expense.description}`
            totalAmountOfExpenses += expense.amount
        })

        // Create income summary
        let incomeSummary = ''
        let totalAmountOfIncome = 0
        
        this.income.forEach(function(income) {
            incomeSummary += `\n\t${income.amount}:\t${income.description}`
            totalAmountOfIncome += income.amount
        })

        summary += `\nTotal income: ${totalAmountOfIncome}`
        summary += `\nTotal expenses: ${totalAmountOfExpenses}`
        summary += `\nCurrent balance: ${totalAmountOfIncome - totalAmountOfExpenses}`

        summary += `\n\nOverview of all income:${incomeSummary}`
        summary += `\n\nOverview of all expenses:${expenseSummary}`

        return summary
    }
}

account.addExpense('Bought a Udemy course', 10.99)
account.addExpense('Bought another Udemy course', 13.99)
account.addIncome('Made some money!', 10000)
account.addIncome('One day I will be rich!', 0.1)
console.log(account.getAccountSummary())

// Expense => description, amount (in euros)
// addExpense
// getAccountSummary