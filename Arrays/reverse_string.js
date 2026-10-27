//reverse string using two pointer and running the loop to half teh length of the array
function reverseString(s) {
       let temp = null;
       let left = 0
       let right = s.length-1
       while(left<s.length/2){
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right --

       }

    }