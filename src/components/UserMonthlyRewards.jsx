import React from "react";
import { groupTransactionsPerMonth } from "../util/groupTransactionsPerMonth";
import TransactionTable from "./TransactionTable";

const UserMonthlyRewards = ({ transactions }) => {
  // To get the transaction data for each month
  const groupedTransactions = groupTransactionsPerMonth(transactions);

  return (
    <>
      <h2>User Monthly Rewards</h2>
      {Object.entries(groupedTransactions)?.map(([monthYear, transactions]) => (
        <div key={monthYear} className="month-table">
          <h3>{`${transactions[0]?.month} ${transactions[0]?.year}`}</h3>
          <TransactionTable transactions={transactions} />
        </div>
      ))}
    </>
  );
};

export default UserMonthlyRewards;
