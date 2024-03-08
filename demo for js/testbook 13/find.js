function search(array, num){
    const res = array.find(function(value){
        return value == num
    })
    if(res){
        console.log(`${num} is found`);
    } else {
        console.log(`${num} is not found`);
    }
}
search([1,2,3,4,5,6,7,8,9], 2)
search([11,22,33,44,55,66,77,88,99], 21)
search([21,23,53,64,75,86,77,84,59], 64)