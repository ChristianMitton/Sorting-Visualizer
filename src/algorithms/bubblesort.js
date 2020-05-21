function bubblesort(array){
    console.log('original array: ' + array)
    let stopPoint = array.length
    let snapshots = []

    while(stopPoint > 0){
        for(let i = 1; i < stopPoint; i += 1){            

            let key = array[i]
            let j = i - 1                                
            
            if(array[j] > key){                
                snapshots.push([array.slice(), key])
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp                                                
            }            
            snapshots.push([array.slice(), key])
            console.log(array)                            
        }
        stopPoint -= 1
        // console.log('stopPoint: ' + stopPoint)
        // console.log('End of iteration')
    }    

    console.log('new array: ' + array)    
    return snapshots
}

export default bubblesort;

let arr = [9,2,7,5,10,8,4,3,1,6]
// arr = [5,8,1,6,9,2]

bubblesort(arr)