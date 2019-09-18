function binarySearch(arr,val){

    var start=0;
    var end= arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== val && start <= end){
        console.log(start,middle,end);
        
        if(val < arr[middle]){
            end = middle-1;
        }
        else if( val > arr[middle]){
            start = middle + 1;          
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start,middle,end);
    
    //return arr[middle] ===val ? middle : -1;
    if(arr[middle] === val){
        return middle;
    }
    return -1;
}

console.log(binarySearch([2,4,6,7,9,12,15,19,22,26,29,30,35,36,37],9));