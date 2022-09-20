/*
transactions array will store each transaction as an object of expense class
Payer   Payee   Amount
p1      p2      val
*/
export default class Expense {
  constructor(p1, p2, val) {
    this.person1 = p1;
    this.person2 = p2;
    this.amount = val;
  }
}
