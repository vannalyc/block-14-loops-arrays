//input array
const numbers = [2, 4, 8, 11, 20, 15, 22];
const odds = [];
numbers.forEach((num) => {
  if (num % 2 === 1) {
//push odd num in 2nd array set
    odds.push(num);
  }
});
//expected print 11, 15
console.log(odds); 