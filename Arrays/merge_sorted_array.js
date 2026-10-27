 
 //merege two sorted arrays, three pointer approach
 
 function merge(nums1, m, nums2, n) {
        let p1 = (m+n)-1
        let p2 = m-1
        let p3 = n-1

        while(p3>=0){
            if(p2>=0 && nums1[p2] > nums2[p3]){
                nums1[p1] = nums1[p2]
                p1--
                p2--


            }else{
                nums1[p1] = nums2[p3]
                p3--
                p1--
            }
        }
    }