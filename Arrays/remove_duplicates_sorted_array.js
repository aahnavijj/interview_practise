//two pointer approach with left and right pointer 
var removeDuplicates = function(nums) {
    let left = 0
    for(let r=1; r<nums.length; r++){
        if(nums[left] !== nums[r]){
            left++
            nums[left] = nums[r]
        }
    }
    return left+1
    
};