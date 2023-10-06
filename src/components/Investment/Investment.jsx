import "./Investment.css";

const Investment = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const investmentsContent = props.investments.map((investment) => {
    const totalSavings = investment.savingsEndOfYear;
    const year = investment.year;
    const interestYearly = investment.yearlyInterest;
    const totalInterest = investment.yearlyContribution;
    const id = Math.random();

    return (
      <tr key={id}>
        <td>{year}</td>
        <td>{formatter.format(totalSavings)}</td>
        <td>{formatter.format(interestYearly)}</td>
        <td>
          {formatter.format(
            totalSavings - props.initialInvestment - totalInterest * year
          )}
        </td>
        <td>
          {formatter.format(props.initialInvestment + totalInterest * year)}
        </td>
      </tr>
    );
  });

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{investmentsContent}</tbody>
    </table>
  );
};

export default Investment;
