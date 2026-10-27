 
 //move all zeros to the end in this array
 function moveZeroes(nums) {
        let left = 0
        for(let i=0; i<nums.length; i++){
            if(nums[i] !== 0){
                nums[left] = nums[i]
                left++
            }
        }

        while(left < nums.length){
            nums[left] = 0
            left++
        }
    }