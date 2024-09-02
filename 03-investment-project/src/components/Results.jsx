import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInputs }) {
  const resultData = calculateInvestmentResults(userInputs);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested capital</th>
      </thead>
      <tbody>
        {resultData.map((item, index) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
          const totalInvestedAmt = item.valueEndOfYear - totalInterest;
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestedAmt)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
