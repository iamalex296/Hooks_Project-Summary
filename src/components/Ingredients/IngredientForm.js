import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";

import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  console.log("RENDERING INGREDIENT FORM");
  // const [inputState, setInputState] = useState({ title: "", amount: "" });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  // const titleChangeHandler = (e) => {
  //   setInputState({ ...inputState, title: e.target.value });
  //   console.log(typeof e.target.value);
  // };

  // const amountChangeHandler = (e) => {
  //   setInputState({ ...inputState, amount: e.target.value });
  //   console.log(typeof e.target.value);
  // };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              onChange={(event) => setEnteredTitle(event.target.value)}
              value={enteredTitle}
              // onChange={(e) => titleChangeHandler(e)}
              // value={inputState.title}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              onChange={(event) => setEnteredAmount(event.target.value)}
              value={enteredAmount}
              // onChange={(e) => amountChangeHandler(e)}
              // value={inputState.amount}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading ? <LoadingIndicator /> : null}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
