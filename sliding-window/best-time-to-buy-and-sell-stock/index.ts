function buyAndSellStock(prices: number[]) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;
  while (sell < prices.length) {
    let profit = 0;
    if (prices[buy] < prices[sell]) {
      profit = prices[sell] - prices[buy];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return maxProfit;
}
