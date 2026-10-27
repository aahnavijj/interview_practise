class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

    trap(height) {
        let n = height.length;

        let leftMax = []
        leftMax[0] = height[0]
        for(let i = 1; i<n; i++){
            leftMax[i] = Math.max(height[i], leftMax[i-1])

        }
let rightMax = []
        rightMax[n-1] = height[n-1]
        for(let i = n-2; i>=0; i--){
            rightMax[i] = Math.max(height[i], rightMax[i+1])

        }


        let ans = 0
        for(let i=0; i<n ; i++){
            let trappingWater =  Math.min(leftMax[i], rightMax[i]) - height[i]
            ans = ans + (trappingWater < 0 ? 0 : trappingWater)
        }
        return ans 

    }
}
