function selection_sort(arr){    
    for (let i = 0; i < arr.length-1; i += 1) {
        let num = arr[i]
        let [min, idx] = getSmallest(arr, i + 1)        
        
        if (min < num) {
            let temp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = temp
        }
        
    }
    return arr
}

function getSmallest(arr, startIdx) {
    let min = Number.POSITIVE_INFINITY;  
    let idx = Number.POSITIVE_INFINITY;  

    // console.log(`Checking numbers after idx ${startIdx - 1}...`)

    for (let i = startIdx; i < arr.length; i += 1){
        // console.log(`   arr[i]: ${arr[i]}`)
        // console.log(`       is ${arr[i]} < ${min}?`)        
        if(arr[i] < min){
            // console.log('           yes')
            min = arr[i]
            idx = i
        } else {
            // console.log('           no')
        }
    }

    // console.log(`Smallest number is ${min}`)

    return [min,idx]
}

// export default selection_sort;

let arr = [9,2,7,5,8,4,3,1,6]

// console.log(arr)

arr = selection_sort(arr)

// console.log(arr)
