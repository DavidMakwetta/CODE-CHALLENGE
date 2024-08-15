/*Given an integer num, write a function that repeatedly adds all its digits until the result has only one digit, and return it.*/

function add(num){
    while(num >= 10){
        let sum = 0;
        while(num > 0){
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

console.log(add(20))