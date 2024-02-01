// Akshun chauhan 000363152
import React, { useState } from 'react';

// variables to hold income, tax, and error message
function IncomeTaxCalculator() {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(0);
  const [error, setError] = useState('');

  const calculateTax = () => {
    // Validate if income is a positive number
    if (income <= 0 || isNaN(income)) {
        setError('Please enter a valid taxable income.');
        return;// Exit function if income is invalid
      }
    let taxOwed = 0;

    // Calculate tax based on income
    if (income <= 9225) {
      taxOwed = income * 0.1;
    } else if (income <= 37450) {
      taxOwed = 922.5 + (income - 9225) * 0.15;
    } else if (income <= 90750) {
      taxOwed = 5156.25 + (income - 37450) * 0.25;
    } else if (income <= 189300) {
      taxOwed = 18481.25 + (income - 90750) * 0.28;
    } else if (income <= 411500) {
      taxOwed = 46075.25 + (income - 189300) * 0.33;
    } else if (income <= 413200) {
      taxOwed = 119401.25 + (income - 411500) * 0.35;
    } else {
      taxOwed = 119996.25 + (income - 413200) * 0.396;
    }

    setTax(taxOwed);
    setError(''); // Clear any previous error messages
  };

  return (
    <div className="IncomeTaxCalculator"> 
      <h2>Income Tax Calculator</h2>
      <div>
        <label htmlFor="income">Enter taxable income:</label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateTax}>Calculate Tax</button>
      <div>
      {error && <p className="error">{error}</p>}
        {!error && <p>Federal income tax owed: ${tax.toFixed(2)}</p>}
      </div>
    </div>
  );
}

export default IncomeTaxCalculator;
