import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export default function IncomeExp (){
  // because we need the transactions, we import the transactions in the project through the globalcontext & usecontext

  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount);

  
  const income =(amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0))
    .toFixed(2);

    const exp = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0))
    .toFixed(2);

  return (
    <div className='inc-exp-container'>
    <div>
        <h4> Income </h4>
        <p className='money plus'> ${income}</p>
    </div>
    <div> 
        <h4> Expense</h4>
        <p className='money minus'> ${exp}</p>
    </div>
    </div>
  )
}
