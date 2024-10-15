import React from "react";
import { customerRewards } from "../util/customerRewards";

const TotalRewards = (transactions) => {
  const rewardsData = customerRewards(transactions);

  return (
    <>
      <h2>Total Rewards</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Total Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rewardsData).map(
            ([customerId, { customerName, totalPoints }]) => {
              return (
                <tr key={customerId}>
                  <td>{customerName}</td>
                  <td>{totalPoints}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default TotalRewards;
