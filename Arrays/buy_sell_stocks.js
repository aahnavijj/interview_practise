 function maxProfit(prices){
        let left = 0
        let right = 1
        let profit = 0
        while(left<prices.length){
            if(prices[left]<prices[right]){
                profit = Math.max(profit,prices[right] - prices[left])
                right ++
            }else{
                left = right 
                right ++
            }
        }
        return profit


    };