function sortDesc(arr) {
    return arr.sort((a,b) => b - a);
}

const inputArray = [ 5,2,9,1,5,6];
const sortedArray = sortDesc(inputArray);
console.log(sortedArray);