// function to generate an array of numbers between two given numbers
function generateArray(start, end){
    let arr = []; // initialize an emepty array to store the generated numbers
    if(start < end){  // determine the direction of generating numbers 

// loop through the start number to the end number and push each number into the result array
        for(let i = start; i <= end; i++){  
            arr.push(i);
        }
    }else{
        for(let i = start; i >= end; i--){
            arr.push(i);
        }
    }
    return arr; // return the generated array
}
console.log(generateArray(4, 7));
