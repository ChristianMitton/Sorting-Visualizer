// class Sides{
//     constructor(start, end){
//         this.start = start        
//         this.end = end
//     }
// }

function mergesort(array, startIdx, endIdx){           

    let mid = Math.floor(startIdx + endIdx/2);

    console.log('starti: ' + startIdx + ', mid: ' + mid)
    if(startIdx === mid){                
        return [startIdx, endIdx]
    }        
    
    let left = mergesort(array, startIdx, mid)   
    console.log('Left: ' + left) 
    // return left
    let right = mergesort(array, mid+1, endIdx)
        
    // return 
    console.log('Left: ' + left + ', Right: ' + right)
    // return merge(l, r)
}

// let arr = [4,3,2,1];

// // let m = Math.floor(arr.length/2)-1

// let start = 0
// let end = arr.length-1

// // console.log('Before: ' + arr)

// mergesort(arr, start, end)

// console.log('After: ' + arr)