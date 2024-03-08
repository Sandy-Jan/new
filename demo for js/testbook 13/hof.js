const array = [1,2,3,4,5,6,7,8,9,];
const newArray = array.map(function(value){
    return value*5;
})
console.log('the value of multiplication will be ', newArray);

const names = array.forEach(function(value){
    return value *2
    
})
console.log(names);