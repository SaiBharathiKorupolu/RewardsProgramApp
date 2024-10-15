import { rewardPointsCalculation } from "./rewardPointsCalculation";
import { getMonthName } from "./getMonthName";

export const groupTransactionsPerMonth = (transactions) => {
  const transactionsByMonth =
    Array.isArray(transactions) &&
    transactions?.reduce(
      (
        acc,
        {
          customerId,
          customerName,
          transactionDate,
          productPurchased,
          amountSpent,
        },
      ) => {
        const [, month, year] = transactionDate.split("/");
        const monthYear = `${month}-${year}`; // 'MM-YYYY' format

        // Initialize the array if it doesn't exist
        if (!acc[monthYear]) {
          acc[monthYear] = [];
        }

        acc[monthYear].push({
          customerId,
          customerName,
          transactionDate,
          productPurchased,
          amountSpent,
          rewardPoints: rewardPointsCalculation(amountSpent),
          monthYear,
          month: getMonthName(month),
          year,
        });

        return acc;
      },
      {},
    );

  return transactionsByMonth;
};
