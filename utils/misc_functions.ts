export const handleCreditScore = (
  prev_score: number,
  pcp: number,
  debts_settled: number,
  balance: number,
  total_creditors: number
) => {
  const pcp_multiple =
    Math.floor((total_creditors / balance) * prev_score) / 100;

  return pcp_multiple * prev_score;
};
