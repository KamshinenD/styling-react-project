import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={ `form-control ${!isValid && 'invalid'}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
        {/* <input type="text" value={enteredValue} onChange={goalInputChangeHandler} style={{border: !isValid && '3px solid red'}}/> */}
        <p>Input cannot be empty</p>
      </div>
        {/* <p style={{display: isValid? 'none':'block', color: 'red', textAlign:'center' }}>Input cannot be empty</p> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
