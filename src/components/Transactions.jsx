import React from "react";
import { rewardPointsCalculation } from "../util/rewardPointsCalculation";

const Transactions = ({ transactions }) => {
  return (
    <>
      <h2>All Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer Name</th>
            <th>Purchase Date</th>
            <th>Product</th>
            <th>Price</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            ({
              transactionId,
              customerName,
              transactionDate,
              productPurchased,
              amountSpent,
            }) => (
              <tr key={transactionId}>
                <td>{transactionId}</td>
                <td>{customerName}</td>
                <td>{transactionDate}</td>
                <td>{productPurchased}</td>
                <td>${amountSpent}</td>
                <td>{rewardPointsCalculation(amountSpent)}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
};

export default Transactions;
