function analyzeArray(array){
    return{
        average: average(array),
        min: min(array),
        max: max(array),
        length: length(array) 
    
    }

}

function average(array){
    let array_average = array.reduce((a,b) => a+b,0)/array.length;
    return array_average
}

function min(array){
    return Math.min(...array)
}

function max(array){
    return Math.max(...array)
}

function length(array){
    return array.length 
}

module.exports = analyzeArray;