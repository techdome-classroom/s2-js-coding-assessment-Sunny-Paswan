/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let container = [];

    for(let char in s){
        if (char ==='('){
        container.push('(');
        }
        else if (char === '{'){
        container.push('{')
        }
        else if (char === '['){
        container.push('[')
    }
    else if (char === ')') {
        if (container.length === 0 || container[container.length - 1] !== '(') {
            return false;
        }
        stack.pop();  // Pop after confirming a match
    } else if (char === '}') {
        if (container.length === 0 || container[container.length - 1] !== '{') {
            return false;
        }
        container.pop();  // Pop after confirming a match
    } else if (char === ']') {
        if (container.length === 0 || container[container.length - 1] !== '[') {
            return false;
        }
        container.pop();  // Pop after confirming a match
    }
    
return container.length === 0;
    }
};

module.exports = { isValid };


