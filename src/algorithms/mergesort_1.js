function mergesort(arr, arrCopy, gridChanges){
  if(arr.length <= 1) {
    return arr
  }
  let mid = Math.floor(arr.length/2);
  let left = mergesort( arr.slice(0, mid));
  let right = mergesort(arr.slice(mid))  
      
  // console.log('left: ' + left + ' right: ' + right)

  return merge(left,right, arrCopy)
}

function merge(arr1, arr2, arrCopy, gridChanges) {

  let result = [];
  let i = 0;
  let j = 0;  
    
  while(i < arr1.length && j < arr2.length) {
    
    if(arr1[i][0] < arr2[j][0]){
      // console.log('pushing ' + arr2[j])
      result.push(arr1[i])
      i++;
    } else if(arr2[j][0] < arr1[i][0]){
      result.push(arr2[j])
      j++;
    } else {
      result.push(arr1[i])      
      result.push(arr2[j])
      i++;
      j++;
    }
  }

 while(i < arr1.length) {
    result.push(arr1[i])
    i++;
 }
 while(j < arr2.length){
    result.push(arr2[j])
    j++;
 }    

 console.log('result: ')
 console.log(result)

// console.log('1: ' + arr1)
// console.log('2: ' + arr2)
// console.log('r: ' + result)

return result
}

// export default mergesort;


// let arr = [4,3,2,1];
// let arr = [9,2,7,5,10,8,4,3,1,6];
// let arrWithIdx = []
// let gridChanges = []

// arr.forEach((item, idx) => {
//   arrWithIdx.push([item,idx])
// })

// // console.log(arrWithIdx)

// let x = mergesort(arrWithIdx, arr.slice(), gridChanges)
// // console.log('Before: ' + arr)

// // let x = mergesort(arr)

// console.log('> ')

// // console.log(x)



// 9,2,7,5,10,8,4,3,1,6

// result = (9,0),(2,1)
//           > swap nums only, NOT idx:  (2,0),(9,1)
//           > add new nums to 