/*Declaration of global variables*/
const accountButton = document.querySelector('.btn')
const accountType = document.querySelector('.amount-type')
const inputDescription = document.querySelector('.description')
const inputAmount = document.querySelector('.amount')
const incomeContainer = document.querySelector('.income-container')
const expenseContainer = document.querySelector('.expense-container')
const totalIncome = document.querySelector('#total-income')
const totalExpense = document.querySelector('#total-expense')
const balanceDescription = document.querySelector('.balance-description')
const errorDiv = document.querySelector('.error-message')
/*accoutInformation object which is stored in the local storage initially*/
const accountInformation = {
    incomes: [{
            description: 'Salary',
            amount: 3000,
            time: 'Feb 1, 2020 16:19'
        },
        {
            description: 'onlineIncome',
            amount: 1000,
            time: 'Feb 2, 2020 16:19',
        },
        {
            description: 'rent',
            amount: 500,
            time: 'Feb 3, 2020 16:19'
        }
    ],
    expenses: [{
            description: 'transport',
            amount: 100,
            time: 'Feb 1, 2020 16:19'
        },
        {
            description: 'food',
            amount: 400,
            time: 'Feb 1, 2020 16:19'
        },
        {
            description: 'fee',
            amount: 1000,
            time: 'Feb 1, 2020 16:19'
        }
    ],
    addIncome: function () {
        const description = inputDescription.value
        const amount = inputAmount.value
        this.incomes.push({
            description,
            amount,
            time: dateToday()
        })
    },
    addExpense: function () {
        const description = inputDescription.value
        const amount = inputAmount.value
        this.expenses.push({
            description,
            amount,
            time: dateToday()
        })
    },
    totalIncome: function () {
        const total = this.incomes.reduce((acc, curr) => {
            return (acc + Number(curr.amount))
        }, 0)
        return total
    },
    totalExpense: function () {
        const total = this.expenses.reduce((acc, curr) => {
            return (acc + Number(curr.amount))
        }, 0)
        return total
    },
    accountBalance: function () {
        const balance = this.totalIncome() - this.totalExpense()
        return balance
    },
    accountInfo: function () {
        return `You have ${this.accountBalance()}\u20AC in your account`
    }


}

/* Event listener for add button*/
accountButton.addEventListener('click', event => {
    const isValid = validateInputs()
    if (isValid) {
        if (accountType.value == 'Income') {
            accountInformation.addIncome()
            localStorage.setItem('accountInfo', JSON.stringify(accountInformation))
        }
        if (accountType.value == 'Expense') {
            accountInformation.addExpense()
            localStorage.setItem('accountInfo', JSON.stringify(accountInformation))
        }
        displayAccountInfo(accountInformation)
        location.reload()

    }
})

/*Function to display the incomes, expenses and the account balance*/
const displayAccountInfo = accountInfo => {
    incomeContainer.textContent = ''
    expenseContainer.textContent = ''
    totalIncome.textContent = ''
    totalExpense.textContent = ''
    errorDiv.textContent = ''
    const incomes = accountInfo.incomes
    const expenses = accountInfo.expenses
    for (const income of incomes) {
        incomeContainer.innerHTML +=
            `<div class = "income-divs">
        <div class = "income-description">${income.description}</div>
        <div class = "income-amount">${income.amount + "\u20AC"}</div>
        <div class = "income-time">${income.time}</div>
        </div>`
    }
    for (const expense of expenses) {
        expenseContainer.innerHTML +=
            `<div class = "expense-divs">
        <div class = "expense-description">${expense.description}</div>
        <div class = "expense-amount">${expense.amount + "\u20AC"}</div>
        <div class = "expense-time">${expense.time}</div>
        </div>`
    }
    totalIncome.textContent = accountInformation.totalIncome() + "\u20AC"
    totalExpense.textContent = accountInformation.totalExpense() + "\u20AC"
    balanceDescription.textContent = accountInformation.accountInfo()
}

/*Home page loading*/
const getAccountInfo = JSON.parse(localStorage.getItem('accountInfo'))
if (!getAccountInfo) {
    localStorage.setItem('accountInfo', JSON.stringify(accountInformation))
    displayAccountInfo(accountInformation)
} else {
    const getAccountInfo = JSON.parse(localStorage.getItem('accountInfo'))
    accountInformation.incomes = getAccountInfo.incomes
    accountInformation.expenses = getAccountInfo.expenses
    displayAccountInfo(accountInformation)

}