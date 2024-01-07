//practice 1
function increment(){
    let a = 1;
    return function(){
        return a++;
    }
}

// const get_increment = increment();
// console.log(get_increment());//2
// console.log(get_increment());//3

//practice 2
const sum = function(){
    let a = 5;

    //return an object
    return {
        increment_1: function(b){
            return a+b;
        },
        increment_2: function(c){
            return a+c;
        }
    }
}

let get_sum = sum();

// console.log(get_sum);
/*
get_sum contains 2 function
    {
    increment_1: [Function: increment_1],
    increment_2: [Function: increment_2]
    }
*/

// console.log(get_sum.increment_1);
// console.log(get_sum.increment_2);
/*
    [Function: increment_1]
    [Function: increment_2]
*/

console.log(get_sum.increment_1(2)); //7
console.log(get_sum.increment_2(3)); //8