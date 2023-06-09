// Create a function called fibonacci_sequence that takes in an integer n as its parameter and returns a list of the first n numbers in the Fibonacci sequence.

// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

// Example input/output:

// fibonacci_sequence(5) => [0, 1, 1, 2, 3]
// fibonacci_sequence(10) => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Hint: You can use a recursive function to generate the sequence, and utilize the concept of function scope to keep track of the previous two numbers.

//recursive

function fibonacci(n){
    //base case
    if(n<2){
        return n
    }
    return fibonacci(n-1)+ fibonacci(n-2)
}
const result= fibonacci(10)
console.log(result)

//for loop

function fibonacci(n){
    let circle=[0,1]
    for (let i=2; i<=n; i++){
        circle[i]= circle[i-1] +circle[i-2]
    }
}
const fib2= fibonacci2(10)
console.log(fib2)