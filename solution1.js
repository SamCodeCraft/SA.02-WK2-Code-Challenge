//function to swap the case of each character in a string

function swapCase(string){ 
    
    let newString = ''; // Initialize an empty string to store the result


    for(let i = 0 ; i < string.length; i++){  // loop through each character in the input string
        if(string[i] === string[i].toUpperCase()){  // check if the character is uppercase
            newString += string[i].toLowerCase();  // if uppercase, covert to lowercase and append result
        }else{
            newString += string[i].toUpperCase(); // if lowercase convert to uppercase and append result
        }
    }
    return newString; // return the swapped string
}
