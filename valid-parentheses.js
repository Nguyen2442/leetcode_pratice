var isValid = function (s) {
    if (s.length % 2 !== 0)
        return false;
    
    var stack = [];
    
    for (let c of s) {
        if (c === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
        } else if (c === '}' && stack[stack.length - 1] === '{') {
            stack.pop()
        } else if(c === ']' && stack[stack.length-1] ==='['){
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return !stack.length //return true
    
}

s= '{()}'
var result = isValid(s)
console.log(result)