let fibonacciSequence = [];
fibonacciSequence.push(0);
fibonacciSequence.push(1);

for (let i = 2; i < 7; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
}

for (let k = 0; k < 7; k++) {
    console.log(fibonacciSequence[k]);
}