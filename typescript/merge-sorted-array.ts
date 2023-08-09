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

// CASE 4
// let nums1 = [-1,0,0,3,3,3,0,0,0]
// let m = 6
// let nums2 = [1,2,2]
// let n = 3

function merge(nums1: number[], m: number, nums2: number[], n: number): void {  
  // Remove those outside the array margin nums1 
  console.log('nums1:', nums1)  
  console.log('size:', nums1.length)
  console.log('exclude:', m)
  for (let i = nums1.length - 1; i >= 0; i--) {    
    console.log('look position: '+i,' value: '+nums1[i] )
    console.log('new:', nums1) 
    if (i >= m) {
      console.log('find off shore:', nums1[i], ' position: '+i)
      nums1.splice(i, 1);
    }
  }

  // Remove those outside the array margin nums2
  console.log('nums2:', nums2)  
  console.log('size:', nums2.length)
  console.log('exclude:', n)
  for (let i = nums2.length - 1; i >= 0; i--) {    
    console.log('look position: '+i,' value: '+nums2[i] )
    console.log('new:', nums2) 
    if (i >= n) {
      console.log('find off shore:', nums2[i], ' position: '+i)
      nums2.splice(i, 1);
    }
  }

  // merge
  nums1.push(...nums2)
  console.log('Merged:', nums1)
  // order
  for(let i=0; i<nums1.length; i++){
    const current = nums1[i]
    let j = i-1
    while(j>=0 && nums1[j] > current ){
      nums1[j+1] = nums1[j]
      j--
    }
    nums1[j+1] = current
  }
  console.log('Result: ', nums1)
};
