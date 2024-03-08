function searchIndex(array, num){
    const res = array.findIndex(function(value){
        return value == num;
        return res;
    })
}
console.log(searchIndex([1,2,3,4,5,6,7,8,9], 2));
console.log(searchIndex([11,22,33,44,55,66,77,88,99], 21));
console.log(searchIndex([21,23,53,64,75,86,77,84,59], 64));