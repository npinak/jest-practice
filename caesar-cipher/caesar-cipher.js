function CaesarCipher(str,num){


    let lowercase_text = str.toLowerCase();
    let caesar_text_code = []
    let final_text = ""

    // get character code
    for (let i = 0; i<lowercase_text.length; i++){
        caesar_text_code.push(lowercase_text.charCodeAt(i) + num)
        final_text += String.fromCharCode(caesar_text_code[i]);
    } 
    return final_text

}

module.exports = CaesarCipher;