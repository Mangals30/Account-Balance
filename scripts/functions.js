const getItem = () => {
  let accountsJSON = localStorage.getItem('accountInfo')
  try {
    return accountsJSON ? JSON.parse(accountsJSON) : {}
  } catch (error) {
    {}
  }
}

const setItem = (accountInformation) => {
  localStorage.setItem('accountInfo', JSON.stringify(accountInformation))
}
const getTotal = (array) => {
  const total = array.reduce((acc, curr) => {
    return (acc + Number(curr.amount))
  }, 0)
  return total

}
const getBalance = (incomes, expenses) => getTotal(incomes) - getTotal(expenses)

const clearFields = (...fields) => {
  for (let field of fields) {
    field.textContent = ''
  }
}
const resetBorders = (...fields) => {
  for (let field of fields) {
    field.style.borderColor = 'darkgray'
  }
}

const displayAccountInfo = accountInfo => {
  if (Object.keys(accountInfo).length != 0) {
    clearFields(incomeContainer, expenseContainer, totalIncome, totalExpense, errorDiv)
    resetBorders(accountType, inputDescription, inputAmount)
    const incomes = accountInfo.incomes
    const expenses = accountInfo.expenses
    for (const income of incomes) {
      incomeContainer.innerHTML +=
        `<div class = "grids income-divs">
        <div class = "income-description">${income.description}</div>
        <div class = "income-amount">${income.amount + "\u20AC"}</div>
        <div class = "income-time">${income.time}</div>
        </div>`
    }
    for (const expense of expenses) {
      expenseContainer.innerHTML +=
        `<div class = "grids expense-divs">
        <div class = "expense-description">${expense.description}</div>
        <div class = "expense-amount">${expense.amount + "\u20AC"}</div>
        <div class = "expense-time">${expense.time}</div>
        </div>`
    }

    totalIncome.textContent = getTotal(incomes) + "\u20AC"
    totalExpense.textContent = getTotal(expenses) + "\u20AC"
    balanceDescription.textContent = getBalance(incomes, expenses) + "\u20AC"
  } else {
    totalIncome.textContent = 0 + "\u20AC"
    totalExpense.textContent = 0 + "\u20AC"
    balanceDescription.textContent = 0 + "\u20AC"
  }
}