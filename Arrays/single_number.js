 //under the operation XOR where a ^ a = 0
 
 function singleNumber(nums) {
       let res = 0
       for(const num of nums){
        res ^= num
       }
       return res
    }