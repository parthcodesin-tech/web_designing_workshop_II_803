import React, { useState } from "react";
import "./App.css";

function App() {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [balance, setBalance] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [accountType, setAccountType] = useState("Savings");

  const [accountData, setAccountData] = useState(null);

  const handleCreateAccount = () => {
    let newBalance =
      Number(balance) + Number(depositAmount);

    let interestRate =
      accountType === "Savings"
        ? 4.5
        : 1.2;

    let interest =
      (newBalance * interestRate) / 100;

    setAccountData({
      accountNumber,
      accountHolder,
      balance: newBalance,
      accountType,
      interest,
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Bank Management System</h2>

        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) =>
            setAccountNumber(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Account Holder Name"
          value={accountHolder}
          onChange={(e) =>
            setAccountHolder(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Initial Balance"
          value={balance}
          onChange={(e) =>
            setBalance(e.target.value)
          }
        />

        <select
          value={accountType}
          onChange={(e) =>
            setAccountType(e.target.value)
          }
        >
          <option>Savings</option>
          <option>Current</option>
        </select>

        <input
          type="number"
          placeholder="Deposit Amount"
          value={depositAmount}
          onChange={(e) =>
            setDepositAmount(e.target.value)
          }
        />

        <button onClick={handleCreateAccount}>
          Submit
        </button>

        {accountData && (
          <div className="details">
            <h3>Account Details</h3>

            <p>
              <strong>Account No:</strong>{" "}
              {accountData.accountNumber}
            </p>

            <p>
              <strong>Holder:</strong>{" "}
              {accountData.accountHolder}
            </p>

            <p>
              <strong>Account Type:</strong>{" "}
              {accountData.accountType}
            </p>

            <p>
              <strong>Balance:</strong> ₹
              {accountData.balance}
            </p>

            <p>
              <strong>Estimated Interest:</strong>
              {" "}₹
              {accountData.interest.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;