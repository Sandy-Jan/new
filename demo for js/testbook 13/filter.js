const array = [1,2,3,4,5,6,7,8,9]
const newArray = array.filter(function(value){
    return value%2==0;
})
console.log(newArray);

const arr = [1,2,2,2,3,3,4,5,4,3,2,2,2];
const newArr = arr.filter(function(val){
    return val ==2
});
console.log(newArr.length);