 function twoSum(nums, target) {
        let indices = {}
        for(let i=0; i<nums.length; i++){
            indices[nums[i]]= i
        }
        for(let j = 0; j<nums.length; j++){
            let diff = target - nums[j]

if(indices[diff] !== j && indices[diff] !== undefined ){
    return [j, indices[diff]]

}
        }
        return []
    }