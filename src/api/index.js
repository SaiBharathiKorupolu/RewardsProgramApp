// Simulating an asynchronous API call to fetch rewards data

import { RewardsData } from "../MockData";

const fetchRewardsData = () => {
  const data = new Promise((resolve) => {
    setTimeout(() => {
      resolve(RewardsData);
    }, 1000);
  });

  return data;
};

export default fetchRewardsData;
