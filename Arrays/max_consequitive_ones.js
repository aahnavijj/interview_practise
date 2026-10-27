//find the maximum consequetive ones in an array Input: nums = [1,1,0,1,1,1]

//Output: 3


function findMaxConsecutiveOnes(nums) {
        let count = 0
        let longestConsecutive = 0
        for(let i=0; i<nums.length; i++){
            if(nums[i] === 1){
                count++
                if(longestConsecutive < count){
                  longestConsecutive = count
                }
                
            }else{
             count = 0


            }
        }
        return longestConsecutive
    }