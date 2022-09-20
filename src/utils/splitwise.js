import Expense from "../classes/expense";
import { push_heap, pop_heap, heap_top } from "./heap";

/*
transactions = [
    {
    person1 : 'pulkit',
    person2: 'deepak',
    amount: 100    
    },
] 
*/

export function splitwise(transactions) {
  let net_balance = {}; //hashmap or object, here key is the person and value is the amount
  for (let i = 0; i < transactions.length; i++) {
    let e = transactions[i]; //e is an object of expense class stored in the transactions array

    //person1 is credited and person2 is debited because p1 payed p2 and now expects p2 to pay him back
    if (e.person1 in net_balance) {
      //checks if e.person1 is present in hm or not
      net_balance[e.person1] += e.amount;
    } else {
      net_balance[e.person1] = e.amount;
    }

    if (e.person2 in net_balance) {
      //checks if e.person1 is present in hm or not
      net_balance[e.person2] -= e.amount;
    } else {
      net_balance[e.person2] = -e.amount;
    }
  }

  let positive = []; //heap of credit holders
  let negative = []; //heap of debit holders

  for (const p in net_balance) {
    if (net_balance[p] > 0) {
      push_heap(positive, net_balance[p], p);
    } else {
      push_heap(negative, -1 * net_balance[p], p); //multiply with -1 to get the absolute max value as the value stored in hashmap is -ve
    }
  }

  let result = []; //array of expense objects

  while (positive.length > 0) {
    let p1 = heap_top(positive);
    let p2 = heap_top(negative);
    pop_heap(positive);
    pop_heap(negative);
    let exp = new Expense(p2.second, p1.second, Math.min(p1.first, p2.first));
    result.push(exp);
    //after this is done, there might be some amount left and we'll need to put that back into the heap
    if (p1.first > p2.first) {
      push_heap(positive, p1.first - p2.first, p1.second);
    } else if (p1.first < p2.first) {
      push_heap(negative, p2.first - p1.first, p2.second);
    }
  }

  return result;
}
