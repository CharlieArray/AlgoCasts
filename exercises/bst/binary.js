
let list = [0,2,4,6,8,9,11,13,15,17,21,23,25,27,30,32,35,37,39,42,46,50]

let target = 32;


function BinarySearch(list,target){
    let low = 0 //array position

    let high = list.length -1 // array position

    let midpoint = low + high / 2 //array position


    while(low <= high){
        let guess = list[midpoint];

        if (guess == target){
             return guess
            }

        if (guess > target){
             high = midpoint - 1;
            }

        else low = midpoint + 1 
    }
    return null
}

BinarySearch(list,target)


//call BinarySearch and pass in list and target