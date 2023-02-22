function reverseString(word){
    // split string
    var splitString = word.split("")

    // reverse array
    var reverseArray = splitString.reverse()

    //join array 
    var joinArray = reverseArray.join("")
    
    return joinArray
}

module.exports = reverseString;