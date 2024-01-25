import { ExpensesList } from '../ExpensesList/ExpensesList';
import { NewExpenses } from '../NewExpenses/NewExpenses';
import { useState } from 'react';
import './Expenses.css';

export const Expenses = () => {
  const [state, setState] = useState([]);
  return (
    <div className='cardsContainer'>
      <NewExpenses expenses={state} setExpenses={setState}/>
      <ExpensesList/>
    </div>
  )
}

