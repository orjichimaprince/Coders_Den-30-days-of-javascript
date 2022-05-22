/* Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and 
it has totalIncome, totalExpense, accountInfo,addIncome, ç and accountBalance methods. Incomes is a 
set of incomes and its description and expenses is a set of incomes and its description.*/

const personAccount = {
    firstName: 'Chima',
    lastName: 'Prince',
    incomes: { allowance: 0, specialDuties: 0, medical: 0, special: 0 },
    expenses: { waterBill: 0, NepaBill: 0, upkeep: 0, rent: 0, miscellenous: 0 },
    totalIncome: function() {
        let { allowance, specialDuties, medical, special } = this.incomes
        return allowance + specialDuties + medical + special
    },
    totalExpense: function() {
        return this.expenses.waterBill + this.expenses.NepaBill + this.expenses.upkeep + this.expenses.rent + this.expenses.miscellenous
    },
    addIncome: function() {
        return (this.incomes.special + this.incomes.medical) - this.incomes.allowance
    },
    accountInfo: function() {
        if (totalExpense() > totalIncome()) {
            return 'Account is in debit(dr)'
        } else if (totalExpense < totalIncome) {
            return 'Account is in debit(dr)'
        } else {
            return 'Account is in zero balance(0)'
        }
    },
    addExpensse: function() {
        return totalExpense = waterBill + NepaBill + upkeep + rent + miscellenous
    }
}
console.log(personAccount.totalExpense())
console.log(personAccount.totalIncome())