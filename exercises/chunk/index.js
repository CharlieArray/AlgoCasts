// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(chunk, size){   

    let chunked = [];
    //chunked = [[1,2],[3]]

    //iterate through array
    for(let item of chunk){
        let last = chunked[chunked.length - 1]
        console.log(chunked)
    
        if(!last || last.length == size){
            chunked.push([item]);
        }
        else last.push(item);
    }
    return chunked;
}

module.exports = chunk;
