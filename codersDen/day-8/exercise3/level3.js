/* Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and 
it has totalIncome, totalExpense, accountInfo,addIncome, ç and accountBalance methods. Incomes is a 
set of incomes and its description and expenses is a set of incomes and its description.*/

const personAccount = {
    firstName: 'Chima',
    lastName: 'Prince',
    incomes: [allowance = 0, specialDuties = 0, medical = 0, special = 0],
    expenses: [waterBill = 0, NepaBill = 0, upkeep = 0, rent = 0, miscellenous = 0],
    let totalIncome = function(allowance, specialDuties, medical) {
            return $(this.allowance) + $(this.specialDuties) + $(this.medical)
        },
        let totalExpense = function(waterBill, NepaBill, upkeep, miscellenous) {
                return `${this.waterBill} + ${this.NepaBill} + ${this.upkeep} + ${this.rent} + ${this.miscellenous}`
            },
            let addIncome = function(special, meical, allowance) {
                    return `${(special + meical)- allowance}`
                },
                let accountInfo = function(totalExpense, totalIncome) {
                        if (totalExpense > totalIncome) {
                            return 'Account is in debit(dr)'
                        } else if (totalExpense < totalIncome) {
                            return 'Account is in debit(dr)'
                        } else {
                            return 'Account is in zero balance(0)'
                        }
                    },
                    addExpensse = function(...arr) {
                        return totalExpense = waterBill + NepaBill + upkeep + rent + miscellenous
                    }
}
console.log(addExpensse())
    // console.log(accountInfo())