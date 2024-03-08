const array = [34, 45, 56, 67, 78, 89, 34, 23]
const res = array.every(function(value){
    return value >=23
});
console.log(res);
const result = array.some(function(val){
    return val >=50
});
console.log(res);
console.log(result);