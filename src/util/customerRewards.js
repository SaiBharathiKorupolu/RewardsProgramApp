// aggregate total reward points by customerId

import { rewardPointsCalculation } from "./rewardPointsCalculation";

export const customerRewards = ({ transactions }) => {
  const aggregateRewardsByCustomer = transactions?.reduce(
    (acc, { customerId, customerName, amountSpent }) => {
      // Checking if customer is present and intializing customer if it doesn't exist
      acc[customerId] = acc[customerId] || { customerName, totalPoints: 0 };
      // Add points for the current transaction to the total
      acc[customerId].totalPoints += rewardPointsCalculation(amountSpent);

      return acc;
    },
    {},
  );

  return aggregateRewardsByCustomer;
};
