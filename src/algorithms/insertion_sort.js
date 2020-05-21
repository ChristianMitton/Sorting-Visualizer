function insertionSort(arr){
    let snapshots = []
    
    for (let i = 1; i < arr.length; i += 1) {        
        //push tuple, with [arr, footerNumToHighlight] format         

        let key = arr[i]
        let j = i - 1
        
        //pushes tuple, with [arr, footerNumToHighlight] format           
        snapshots.push([arr.slice(), key])
        
        while(j >= 0 && arr[j] > key){                                                
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp                       

            j -= 1;                        
            snapshots.push([arr.slice(), key])            
        }        
    }

    return snapshots
}

export default insertionSort;

// let arr = [9,2,7,5,8,4,3,1,6]

// let snapshots = insertionSort(arr)

// console.log('array:')
// console.log(arr)
// console.log(`snapshots:`)
// console.log(snapshots)
