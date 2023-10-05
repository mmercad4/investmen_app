import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Investment from "./components/Investment/Investment";
import { useState } from "react";

function App() {
  const [investmentData, setInvestmentData] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedInterest: "",
    investmentDuration: "",
  });

  const [yearlyData, setYearlyData] = useState();

  const saveInvestmentDataHandler = (enteredInvestmentData) => {
    setInvestmentData(enteredInvestmentData);
    calculateHandler(investmentData);
  };

  const resetInvestmentDataHandler = (enteredInvestmentData) => {
    setInvestmentData({
      currentSavings: "",
      yearlySavings: "",
      expectedInterest: "",
      investmentDuration: "",
    });
  };

  console.log(investmentData);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyDataTemp = []; // per-year results

    let currentSavings = investmentData.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = investmentData.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = investmentData.expectedInterest / 100;
    const duration = investmentData.investmentDuration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyDataTemp.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(yearlyDataTemp);
  };

  return (
    <div>
      <Header />
      <Form
        onSaveInvestmentData={saveInvestmentDataHandler}
        onResetInvestmentData={resetInvestmentDataHandler}
      />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Investment investments={yearlyData} />
    </div>
  );
}

export default App;
