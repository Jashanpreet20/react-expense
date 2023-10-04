
import React , {useState} from "react";

import "./ExpenseForm.css";
const ExpenesFrom = () => {

  // handling mulitple states 
  const [enterTitle,setChangeTitle]=useState('');
  const [enterAmount,setChangeAmount]=useState('');
  const [enterDate,SetChangeDate]=useState('');

  // handling single state
  // const [userInput,setUserInput]=useState({
  //   enterTitle:'',
  //   enterAmount:'',
  //   enterDate:'',
  // })

  
  const titleChangeHandler=event =>{
     setChangeTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterTitle:event.target.value,
      
    // })

    //another approach for managing states when we have multiple states
    // setUserInput((prevState) =>{
    //   return {...prevState,enterTitle:event.target.value}
    // })
  }
  const amountChangeHandler=event =>{
    setChangeAmount(event.target.value);
  //  setUserInput({
  //   ...userInput,
  //   enterAmount:event.target.value
  // })
  }
  const dateChangeHandler=event=>{
    SetChangeDate(event.target.value);
  //  setUserInput({
  //   ...userInput,
  //   enterDate:event.target.value
  // })
  }
  
  const submitHandler=(event)=>{
    event.preventDefault();

    const expensedate={
      title:enterTitle,
      amount:enterAmount,
      date: new Date(enterDate)
    }

    console.log(expensedate);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenesFrom;
