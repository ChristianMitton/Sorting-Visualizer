function selection_sort(arr){    
    let snapshots = []
    for (let i = 0; i < arr.length-1; i += 1) {
        let num = arr[i]
        
        // let [min, idx] = getSmallest(arr, i + 1)             
        let [min, idx] = getSmallest(arr, i + 1, snapshots, num)                
        
        if (min < num) {
            let temp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = temp
        }        
        //-1 means not to highlight any columns
        console.log('pushing: ' + arr.slice() + ', -1, -1') 
        snapshots.push([arr.slice(), arr[i], arr[idx]])
        
    }
    console.log('snapshots:')
    console.log(snapshots)
    return snapshots
}

function getSmallest(arr, startIdx, snapshots, currentNum) {
    let tempMin = Number.POSITIVE_INFINITY;  
    let tempIdx = Number.POSITIVE_INFINITY;  
    let min = Number.POSITIVE_INFINITY;  
    let idx = Number.POSITIVE_INFINITY;   
    
    //For visual purposes, find the min first. Mark it.
    for (let i = startIdx; i < arr.length; i += 1){                    
        
        if(arr[i] < tempMin){
            tempMin = arr[i]
            tempIdx = i
        } 
    }    

    for (let i = startIdx; i < arr.length; i += 1){    
        //[snapshot_of_arr, current_num_being_inspected, ptr_looking_for_smalest_num]   
        console.log('pushing: ' + arr.slice() + ', ' + currentNum + ', ' + arr[i]) 

        if(!(i > tempIdx)){
            snapshots.push([arr.slice(), currentNum, arr[i]])            
            // break
        }
        if(arr[i] < min){
            min = arr[i]
            idx = i
        } 
    }    

    return [min,idx]
}

export default selection_sort;

// let arr = [9,2,7,5,8,4,3,1,6]

// console.log('beofre sort: ' + arr)

// arr = selection_sort(arr)

// console.log('beofre sort: ' + arr)
