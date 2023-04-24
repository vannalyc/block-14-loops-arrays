//1 to 100
const n = 100;
//loop through 1 to n 
for (let i = 1; i <= n; i++){

//for numbers that are multiples of both 3 and 5 print fizzbuzz instead of the number
    if (i % 15 === 0 ) {
        console.log ("fizzbuzz");
        }
//for each multiple of 3 print fizz instead of number 
    if (i % 3 === 0) {
        console.log ("fizz");
    }
//for each multiple of 5 print buzz instead of number
    else if (i % 5 === 0 ) {
        console.log ("buzz");
    }
//Print integer
        else {
            console.log (i)
        }

}