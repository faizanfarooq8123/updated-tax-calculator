import React, { useState } from "react";
import "./taxcalulator.css";

const Home = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyTax, setMonthlyTax] = useState(0);
  const [salaryAfterTax, setSalaryAfterTax] = useState(0);
  const [yearlyIncome, setYearlyIncome] = useState(0);
  const [yearlyTax, setYearlyTax] = useState(0);
  const [yearlyIncomeAfterTax, setYearlyIncomeAfterTax] = useState(0);

  const calculateTax = (monthlyIncome) => {
    const yearlyIncome = monthlyIncome * 12;
    let calculatedTax = 0;

    if (yearlyIncome <= 600000) {
      calculatedTax = 0;
    } else if (yearlyIncome <= 1200000) {
      calculatedTax = (yearlyIncome - 600000) * 0.025;
    } else if (yearlyIncome <= 2400000) {
      calculatedTax = 15000 + (yearlyIncome - 1200000) * 0.125;
    } else if (yearlyIncome <= 3600000) {
      calculatedTax = 165000 + (yearlyIncome - 2400000) * 0.2;
    } else if (yearlyIncome <= 6000000) {
      calculatedTax = 405000 + (yearlyIncome - 3600000) * 0.25;
    } else if (yearlyIncome <= 12000000) {
      calculatedTax = 1005000 + (yearlyIncome - 6000000) * 0.325;
    } else if (yearlyIncome > 12000000) {
      calculatedTax = 2955000 + (yearlyIncome - 12000000) * 0.35;
    }

    const monthlyTax = Math.floor(calculatedTax / 12);
    const salaryAfterTax = monthlyIncome - monthlyTax;
    const yearlyTax = Math.floor(calculatedTax);
    const yearlyIncomeAfterTax = yearlyIncome - yearlyTax;

    setMonthlyTax(monthlyTax);
    setSalaryAfterTax(salaryAfterTax);
    setYearlyIncome(yearlyIncome);
    setYearlyTax(yearlyTax);
    setYearlyIncomeAfterTax(yearlyIncomeAfterTax);
  };

  const handleMonthlyIncomeChange = (event) => {
    const newMonthlyIncome = event.target.value;
    setMonthlyIncome(newMonthlyIncome);
    calculateTax(newMonthlyIncome);
  };
  const handleSlabsClick = () => {
    const message = `Income Tax Slabs
  As per Federal Budget 2022-2023 presented by Government of Pakistan, the following slabs and income tax rates will be applicable for salaried persons for the year 2022-2023:
  
  - Where the taxable salary income does not exceed Rs. 600,000, the rate of income tax is 0%.
  - Where the taxable salary income exceeds Rs. 600,000 but does not exceed Rs. 1,200,000, the rate of income tax is 2.5% of the amount exceeding Rs. 600,000.
  - Where the taxable salary income exceeds Rs. 1,200,000 but does not exceed Rs. 2,400,000, the rate of income tax is Rs. 15,000 + 12.5% of the amount exceeding Rs. 1,200,000.
  - Where the taxable salary income exceeds Rs. 2,400,000 but does not exceed Rs. 3,600,000, the rate of income tax is Rs. 165,000 + 20% of the amount exceeding Rs. 2,400,000.
  - Where the taxable salary income exceeds Rs. 3,600,000 but does not exceed Rs. 6,000,000, the rate of income tax is Rs. 405,000 + 25% of the amount exceeding Rs. 3,600,000.
  - Where the taxable salary income exceeds Rs. 6,000,000 but does not exceed Rs. 12,000,000, the rate of income tax is Rs. 1,005,000 + 32.5% of the amount exceeding Rs. 6,000,000.
  - Where the taxable salary income exceeds Rs. 12,000,000, the rate of income tax is Rs. 2,955,000 + 35% of the amount exceeding Rs. 12,000,000.`;

    alert(message);
  };

  return (
    <div className="tax-calculator">
      <h1 className="title">Tax Calculator 2022-2023</h1>
      <p>
        Calculate your income tax based on the provided income. Click{" "}
        <a href="#" onClick={handleSlabsClick} style={{ color: "blue" }}>
          Salary Tax Slab
        </a>{" "}
        for income tax slabs information.
      </p>
      <div className="input-group">
        <label htmlFor="monthly-income" className="label">
          Monthly Income:
        </label>
        <input
          type="number"
          id="monthly-income"
          value={monthlyIncome}
          onChange={handleMonthlyIncomeChange}
          style={{
            border: "none",
            outline: "none",
            background: "none",
            width: "100%"
          }}
          className="input-no-arrows"
        />
      </div>
      <div className="input-group">
        <label htmlFor="monthly-tax" className="label">
          Monthly Tax:
        </label>
        <input
          type="text"
          id="monthly-tax"
          value={monthlyTax}
          disabled
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="salary-after-tax" className="label">
          Salary After Tax:
        </label>
        <input
          type="text"
          id="salary-after-tax"
          value={salaryAfterTax}
          disabled
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="yearly-income" className="label">
          Yearly Income:
        </label>
        <input
          type="text"
          id="yearly-income"
          value={yearlyIncome}
          disabled
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="yearly-tax" className="label">
          Yearly Tax:
        </label>
        <input
          type="text"
          id="yearly-tax"
          value={yearlyTax}
          disabled
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="yearly-income-after-tax" className="label">
          Yearly Income After Tax:
        </label>
        <input
          type="text"
          id="yearly-income-after-tax"
          value={yearlyIncomeAfterTax}
          disabled
          className="input"
        />
      </div>
    </div>
  );
};

export default Home;
