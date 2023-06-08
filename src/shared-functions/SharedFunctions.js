
export function updateValues(transactions) {
    const amounts = transactions.map(transaction => 
      transaction.value
    )
    const income =  amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    const expense = Math.abs(amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2)) // Math.abs returns the absolute value 
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    // console.log(expense)
    // console.log(income)
    // console.log(total)
    return { total, expense, income }
}
