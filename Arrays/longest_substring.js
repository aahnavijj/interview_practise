 function lengthOfLongestSubstring(s) {

        let i  = 0
        let map = {}
        let currWindow = 0
        let maxWindow  = 0
        for(let j=0; j<s.length; j++){
            //if the map already has the value
            if(map[s[j]] !== undefined && map[s[j]]>=i){
                i = map[s[j]] + 1
            }
            map[s[j]] = j
currWindow = j-i+1
 maxWindow = Math.max(maxWindow, currWindow)
        }


return maxWindow

    }