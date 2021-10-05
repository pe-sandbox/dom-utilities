function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split("");
    // ["b", "r", "a", "z", "i", "l"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse();
    // ["l", "i", "z", "a", "r", "b"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 
    // "lizarb"
    
    //Step 4. Return the reversed string
    return joinArray; // "lizarb"
}
 
reverseString("brazil");