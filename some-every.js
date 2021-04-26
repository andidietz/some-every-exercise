function hasOddNumber(arr) {
    return arr.some(function(num){
        return num % 2 === 1
    })
}


function hasAZero(num) {
    const str = num.toString()
    const numArr = [...str]
    return numArr.some(function(number){
        return number === '0'
    })
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function(num){
        return num % 2 === 1
    })
}

function hasNoDuplicates(arr) {
    const obj = {}
    arr.some(function(num){
        if (obj[num]){
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    })
    const values = Object.values(obj)
    return values.some(function(val){
        return (!val === 1)
    })  
}

function hasCertainKey(arr, key) {
    return arr.every(function(obj){
        return obj[key]
    })
}

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(obj){
        if (obj[key] === searchValue) return true 
    })
}
