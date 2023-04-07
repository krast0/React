import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';

function expenseItem(props){



  return (
    <div className='expense-item'>
        <ExpenseDate date={props.date} />
      <div className='expense-ite__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>{props.amount}</div>
    </div>
  );
};
export default expenseItem;
