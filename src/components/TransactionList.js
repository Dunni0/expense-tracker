import React, {useContext} from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalContext'

export default function TransactionList (){
const {transactions} = useContext(GlobalContext)


  return (
    <div>
        <h3> Transaction History </h3>
        <ul  className='list'>
          {transactions.map(transaction => {
            return(
              <Transaction key={transaction.id} transaction= {transaction} />
            )
          })}
              
        </ul>
    </div>
  )
}
