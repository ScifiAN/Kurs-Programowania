import Card from '../UI/Card';
import ExpanseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
  <Card className='expense-item'>
    <ExpanseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
  </Card>
  );
}

export default ExpenseItem;