/*Function to style the error message*/ 
const errorStyles = (errorMessage,searchField) => {
    errorDiv.textContent = ''
    errorDiv.style.display = 'block'
    errorDiv.textContent = errorMessage
    searchField.style.borderColor = 'red'
    searchField.style.borderStyle = 'thin'

}
const defaultBorder = (searchField1,searchField2) => {
    searchField1.style.borderColor = 'darkgray'
    searchField2.style.borderColor = 'darkgray'
}

const validateInputs = () => {
    let pattern1 = /^[A-Z\s]+$/ig
    let pattern2 = /^[0-9]+$/
    const inputValue = accountType.value
    const description = inputDescription.value
    const amount = inputAmount.value
    if(description.length == 0) {
        let errorMessage = '*Description is required'
        errorStyles(errorMessage,inputDescription)
        defaultBorder(inputAmount,accountType)
        return false
    }
    else if (!(description.match(pattern1))){
        let errorMessage = '*Please enter only alphabets'
        errorStyles(errorMessage,inputDescription)
        defaultBorder(inputAmount,accountType)
        return false
    }
    else if (amount.length == 0){
        let errorMessage = '*Amount is required'
        errorStyles(errorMessage,inputAmount)
        defaultBorder(inputDescription,accountType)
        return false
    }
    else if(!(amount.match(pattern2))) {
        let errorMessage = '*Please enter only digits'
        errorStyles(errorMessage,inputAmount)
        defaultBorder(inputDescription,accountType)
        return false
    }
    else if(inputValue == 'select') {
        let errorMessage = 'Please select the account header'
        errorStyles(errorMessage,accountType)
        defaultBorder(inputAmount,inputDescription)
        return false
    }
    else {
        return true

    }
}