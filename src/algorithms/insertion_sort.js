function insertionSort(arr){
    let visitedNumbers = []
    
    for (let i = 1; i < arr.length; i += 1) {        
        //push tuple, with [arr, footerNumToHighlight] format         

        let key = arr[i]
        let j = i - 1
        
        //pushes tuple, with [arr, footerNumToHighlight] format           
        visitedNumbers.push([arr.slice(), key])
        
        while(j >= 0 && arr[j] > key){                                                
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp                       

            j -= 1;                        
            visitedNumbers.push([arr.slice(), key])            
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
