/* Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and 
it has totalIncome, totalExpense, accountInfo,addIncome, ç and accountBalance methods. Incomes is a 
set of incomes and its description and expenses is a set of incomes and its description.*/

const personAccount = {
    firstName: 'Chima',
    lastName: 'Prince',
    incomes: { allowance: 0, specialDuties: 0, medical: 0, special: 0 },
    expenses: { waterBill: 0, NepaBill: 0, upkeep: 0, rent: 0, miscellenous: 0 },
    totalIncome() {
        let { allowance, specialDuties, medical, special } = this.incomes
        return allowance + specialDuties + medical + special
    },
    totalExpense() {
        return this.expenses.waterBill + this.expenses.NepaBill + this.expenses.upkeep + this.expenses.rent + this.expenses.miscellenous
    },
    addIncome() {
        return (this.incomes.special + this.incomes.medical) - this.incomes.allowance
    },
    accountInfo() {
        if (this.totalExpense() > this.totalIncome()) {
            return 'Account is in debit(dr)'
        } else if (this.totalExpense < this.totalIncome) {
            return 'Account is in credit(cr)'
        } else {
            return 'Account is in zero balance(0)'
        }
    },
    addExpensse() {
        return totalExpense = this.expenses.waterBill + this.expenses.NepaBill + this.expenses.upkeep + this.expenses.rent + this.expenses.miscellenous
    }
}
console.log(personAccount.totalExpense())
console.log(personAccount.totalIncome())


/*Imagine you are getting the above users collection from a MongoDB database. 
a. Create a function called signUp which allows user to add to the collection. 
If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application*/

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    },
    {
        signUp(_id, username, email, password, createdAt, isLoggedIn){
         _id = '';
         username = '';
         email = '';
         password = '';
         createdAt ='';
         isLoggedIn = true;
         if (_id !== true && username !==true){
            return _id, username
             }else{
                 return `user is logged in`
             }
        }
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
  
]
const lll = [{},{},{},{}]