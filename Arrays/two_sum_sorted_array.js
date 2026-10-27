  //we are expecting this to be 1nindex array which starts form 1 not 0 thats why returning +1 in the end was necessary
  
  function  twoSum(numbers, target) {
let right = numbers.length - 1
let left = 0
while(left<right){
    let sum = numbers[right] + numbers[left]
    if(sum < target){
        left ++
    }else if(sum > target){
       right --
    }else{
        return [left + 1, right + 1]
    }
}
return []

    }