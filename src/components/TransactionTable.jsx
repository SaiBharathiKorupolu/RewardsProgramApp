// Used in UserMonthlyRewards to iterate the Transactions table for each month

const TransactionTable = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Month</th>
          <th>Year</th>
          <th>Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {transactions?.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.customerId}</td>
            <td>{transaction.customerName}</td>
            <td>{transaction.month}</td>
            <td>{transaction.year}</td>
            <td>{transaction.rewardPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
