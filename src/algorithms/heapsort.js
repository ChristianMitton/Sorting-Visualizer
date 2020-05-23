class Heap{
    constructor(array){
        this.array = array
        this.heap = []
        this.buildHeap()
    }

    buildHeap(){
        for(let i = 0; i < this.array.length; i += 1){
            this.insert(this.array[i])
        }
    }


    insert(target){
        this.heap.push(target)        
        this.siftUp()        
    }

    siftUp(){
        // parent = k/2
        // left = (2 * k) + 1
        // right = (2 * k) + 2
        let k = this.heap.length-1

        // console.log(`k: ${k}`)

        while(k !== 0){
            let parent = Math.floor(k/2)
            if(this.heap[parent] < this.heap[k]){
                //swap parent and child
                this.swap(parent, k)
                k = parent                
            } else {
                break
            }
        }
    }  

    siftDown(){
        // parent = k/2
        // left = (2 * k) + 1
        // right = (2 * k) + 2
        let k = 0

        // console.log(`   sifting down with ${this.heap[k]} as target`)

        let leftChildIdx = (2 * k) + 1
        let rightChildIdx = (2 * k) + 2

        while(leftChildIdx < this.heap.length){            
            let largestChildIdx = leftChildIdx
            if(this.heap[rightChildIdx] > this.heap[leftChildIdx]){
                largestChildIdx = rightChildIdx
            }            
            
            if(this.heap[largestChildIdx] > this.heap[k]){
                this.swap(k, largestChildIdx)
            } else {
                break
            }
            k = largestChildIdx

            leftChildIdx = (2 * k) + 1
            rightChildIdx = (2 * k) + 2
        }
    }

    swap(i, j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp        
    }  

    remove(){                
        if(this.heap.length === 0){
            return false
        } else if(this.heap.length === 1){
            return this.heap.pop()
        } else {
            let biggestNum = this.heap[0]        

            let newHead = this.heap.pop()
            this.heap[0] = newHead
            this.siftDown()

            // console.log('returning ' + biggestNum + ', heap: [' + this.heap + ']')
            // console.log('returning ' + biggestNum)
            return biggestNum
        }

    }                   
}

function heapSort(array){
    let maxHeap = new Heap(array)    
    // let result = []    
    let snapshots = []

    let endIdx = array.length-1

    // snapshots.push(array.slice())
    // console.log(`new snapshot: ${array.slice()}`)

    let i = 0
    while(i < array.length){    
    // array.forEach(element => {
        let biggestNum = maxHeap.remove()
        snapshots.push([array.slice(), biggestNum, biggestNum])
        swapFooterNumWithEndIdx(array, biggestNum, endIdx)
        // snapshots.push(array.slice())
        snapshots.push([array.slice(), biggestNum, biggestNum])
        // console.log(`> new snapshot: [${array.slice()}] - ${biggestNum}`)
        endIdx -= 1
        // result.unshift(biggestNum)
    // });    
        i += 1
    }

    return snapshots
    // return result
}

function swapFooterNumWithEndIdx(array, footerNum, endOfArray){
    let indexOfFooterNum = -1

    //Get indexOfFooterNum in array
    let ptr = 0
    while(ptr < endOfArray){
        if(array[ptr] === footerNum){
            indexOfFooterNum = ptr
        }
        ptr += 1
    }
    
    //swap indexOfFooterNum with end of array
    if(indexOfFooterNum !== -1){
        console.log(`swapping ${array[indexOfFooterNum]} with ${array[endOfArray]}`)
        swap(array, indexOfFooterNum, endOfArray)
    }
}

function swap(array, i, j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp        
}  


export default heapSort;

// let a = [16,24,5,11,2,3,5,1,25]
// a = [ 9 , 2 , 7 , 5 , 10, 8 , 4 , 3 , 1 , 6, ]
// console.log(`array: ${a}`)

// let arrAsHeap = new Heap(a)

// console.log(`converted to heap: ${arrAsHeap.heap}`)

// // console.log(arrAsHeap.remove())

// // console.log(`after remove: ${arrAsHeap.heap}`)

// console.log()
// let snapshots = heapSort(arrAsHeap.heap)

// console.log('snapshots:')
// console.log(snapshots)
// // console.log(`Sorted : ${res}`)
