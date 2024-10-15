// Calculating reward points based on transaction amount

export const rewardPointsCalculation = (transactionAmount) => {
  // 2 points for every dollar spent over $100 in each transaction
  const amountOver100 = Math.max(0, Math.floor((transactionAmount - 100) * 2));

  // 1 point for every dollar spent between $50 and $100 in each transaction
  const amountBetween50to100 = Math.max(
    0,
    Math.floor(Math.min(transactionAmount - 50, 50)),
  );

  // Returns the total reward points
  return amountOver100 + amountBetween50to100;
};
