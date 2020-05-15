function insertionSort(arr){
    let visitedNumbers = []

    // console.log(`initial array: ${arr}`)
    for (let i = 1; i < arr.length; i += 1) {        
        visitedNumbers.push(arr.slice())        
        // console.log(`pushed: ${arr}`)
        let key = arr[i]
        let j = i - 1
        
        while(j >= 0 && arr[j] > key){                                                
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp                       
            j -= 1;            
            visitedNumbers.push(arr.slice())
        }        
    }

    return visitedNumbers
}

export default insertionSort;

// let arr = [9,2,7,5,8,4,3,1,6]

// let visitedNumbers = insertionSort(arr)

// console.log('array:')
// console.log(arr)
// console.log(`visitedNumbers:`)
// console.log(visitedNumbers)
