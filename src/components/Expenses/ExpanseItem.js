import "./ExpanseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmout";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseLocation from "./ExpenseLocatoin";
import Card from "../UI/Card";
const ExpanseItem =(props)  =>{
  //  const handler=() =>{
  //     console.log("clicked");
  //  }
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
       <div className="expense-item__description">
        <ExpenseTitle title={props.title}></ExpenseTitle>
        <ExpenseAmount amount={props.amount}></ExpenseAmount>
       <ExpenseLocation location={props.location}></ExpenseLocation>
        <button  onClick={() =>{console.log('clicked')}}>change title</button>
      </div>
    </Card>
  );
}

export default ExpanseItem;
