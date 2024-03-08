function fn1(){
    console.log(`function one is excuted`);
}

function fn2(cb){
    setTimeout(function(){
        console.log(`function two is excuted`);
    cb();}, 3000)
}
function fn3(){
    console.log(`function three is excuted`);
}

fn1();
fn2(fn3);
