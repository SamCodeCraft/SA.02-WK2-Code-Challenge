// function to help check if a number is prime
function isPrime(num){
    // numbers less than 2 are not prime
    if(num < 2){
        return false;
    }
    for(let i = 2; i < num; i++){ // check for divisibility by 2 of the number
        if(num % i === 0){
            return false; // if divisible, it's not prime
        }
    }
    return true; // if not divisible, it's prime
}
// function to find prime numbers from an array
function findPrimes(arr){
    const primes = []; // initialize an empty array to store prime numbers
    for(let i = 0; i < arr.length; i++){ // iterate through each number in the input array
        if(isPrime(arr[i])){             // check if thenumber is prime
            primes.push(arr[i]);   // if prime, add it to the prime array
        }
    }
    return primes; // return the array containig prime numbers 
}
