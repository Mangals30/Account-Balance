/*Declaration of global variables*/
const accountButton = document.querySelector('.btn')
const forms = document.querySelector('form')
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

/* Event listener for add button*/
accountButton.addEventListener('click', event => {
    event.preventDefault()
    let isValid = validateInputs()
    if (isValid) {
        let accountInfo = getItem()
        if (Object.keys(accountInfo).length == 0) {
            accountInfo.incomes = []
            accountInfo.expenses = []
        }
        if (accountType.value == 'Income') {
            accountInfo.incomes.push({
                description: inputDescription.value,
                amount: Number(inputAmount.value),
                time: moment().format("MMM DD, YYYY HH:mm")
            })

        }
        if (accountType.value == 'Expense') {
            if (Number(inputAmount.value) > getTotal(accountInfo.incomes)) {
                errorStyles('Cannot withdraw since expense amount is greater than the total input amout', inputAmount)
                defaultBorder(inputDescription, accountType)
                return
            } else {
                accountInfo.expenses.push({
                    description: inputDescription.value,
                    amount: Number(inputAmount.value),
                    time: moment().format("MMM DD, YYYY HH:mm")
                })
            }


        }
        setItem(accountInfo)
        displayAccountInfo(accountInfo)
        forms.reset()


    }
})

/*Function to display the incomes, expenses and the account balance*/


/*Home page loading*/
const getAccountInfo = getItem()
displayAccountInfo(getAccountInfo)