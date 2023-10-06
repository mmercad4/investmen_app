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

  const [yearlyData, setYearlyData] = useState([]);

  const saveInvestmentDataHandler = (enteredInvestmentData) => {
    setInvestmentData(enteredInvestmentData);

    const yearlyDataTemp = []; 

    let currentSavings = +enteredInvestmentData.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +enteredInvestmentData.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +enteredInvestmentData.expectedInterest / 100;
    const duration = +enteredInvestmentData.investmentDuration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyDataTemp.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(yearlyDataTemp);
  };

  const resetInvestmentDataHandler = (enteredInvestmentData) => {
    setInvestmentData({
      currentSavings: "",
      yearlySavings: "",
      expectedInterest: "",
      investmentDuration: "",
    });
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

      <Investment
        investments={yearlyData}
        initialInvestment={investmentData.currentSavings}
      />
    </div>
  );
}

export default App;
