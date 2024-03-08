const array = [1,2,3,4,5,6,7,8,9,10];
const sum = array.reduce(function(sum,val){
    return sum + val
}, 0)
const max = array.reduce(function(curr,next){
    return curr > next? curr: next
})
const min = array.reduce(function(curr, next){
    return curr < next ? curr: next
})
console.log(sum);
console.log(max);
console.log(min);