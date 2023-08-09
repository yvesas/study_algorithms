// CASE 1
let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

// CASE 2
// let nums1 = [1]
// let m = 1
// let nums2 = []
// let n = 0

// CASE 3
// let nums1 = [0]
// let m = 0
// let nums2 = [1]
// let n = 1


/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {  
    nums1.push(...nums2)
    console.log('Array:', nums1)  
    console.log('size:', nums1.length)
    for (let i = nums1.length - 1; i >= 0; i--) {    
      console.log('look position: '+i,' value: '+nums1[i] )
      console.log('new:', nums1) 
      if (nums1[i] === 0) {
        console.log('find Zero:', nums1[i], ' position: '+i)
        nums1.splice(i, 1);
      }
    }
    for(let i=0; i<nums1.length; i++){
      const current = nums1[i]
      let j = i-1
      while(j>=0 && nums1[j] > current ){
        nums1[j+1] = nums1[j]
        j--
      }
      nums1[j+1] = current
    }
    console.log('Says: ', nums1)
  };