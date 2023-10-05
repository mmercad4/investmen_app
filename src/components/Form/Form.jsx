import "./Form.css";
import { useState } from "react";

const Form = (props) => {
  const [userInput, setUserInput] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedInterest: "",
    investmentDuration: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userInput.currentSavings === "" ||
      userInput.yearlySavings === "" ||
      userInput.expectedInterest === "" ||
      userInput.investmentDuration === ""
    ) {
      return console.log("ERROR INCOMPLETE");
    }

    props.onSaveInvestmentData(userInput);

    setUserInput({
      currentSavings: "",
      yearlySavings: "",
      expectedInterest: "",
      investmentDuration: "",
    });

    console.log("INVESTMENT INFO PASSED TO PARENT CONTAINER");
  };

  const resetHandler = (event) => {
    event.preventDefault();

    props.onResetInvestmentData();

    setUserInput({
      currentSavings: "",
      yearlySavings: "",
      expectedInterest: "",
      investmentDuration: "",
    });
  };

  const currentSavingsHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, currentSavings: event.target.value };
    });
  };

  const yearlySavingsHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, yearlySavings: event.target.value };
    });
  };

  const expectedInterestHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, expectedInterest: event.target.value };
    });
  };

  const investmentDurationHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, investmentDuration: event.target.value };
    });
  };

  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsHandler}
            value={userInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
            value={userInput.yearlySavings}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedInterestHandler}
            value={userInput.expectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={investmentDurationHandler}
            value={userInput.investmentDuration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={submitHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
