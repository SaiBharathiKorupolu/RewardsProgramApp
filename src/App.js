import { useEffect, useState } from "react";
import fetchRewardsData from "./api";
import UserMonthlyRewards from "./components/UserMonthlyRewards";
import "./App.css";
import TotalRewards from "./components/TotalRewards";
import Transactions from "./components/Transactions";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRewardsData()
      .then((data) => setTransactions(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to fetch transactions. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>; // Error message

  return (
    <div className="container">
      <UserMonthlyRewards transactions={transactions} />
      <TotalRewards transactions={transactions} />
      <Transactions transactions={transactions} />
    </div>
  );
};

export default App;
