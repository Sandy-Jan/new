// let  data = []

// function fetchData(cb){
//     setTimeout(
//         function(){
//             data=[1,2,3,4,5,6,7,8,9,0];
//             console.log(`data fetched successfully`); cb();
//         },
//         3000
//     )
// }
// function display(){
//     console.log('my data is: ', data);
// }
// fetchData(display)

let data = [];

function fetchData(cb){
    setTimeout(
        function(){
            data=[1,2,3,4,5,6,7,8,9,90];
            console.log('data fetched successfully'); cb();
        }, 3000
    )
}
function display(){
    console.log('My data is: ', data);
}
fetchData(display);