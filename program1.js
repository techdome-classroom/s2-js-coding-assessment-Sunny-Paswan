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
        else if (char === '['){}
        container.push('[')
    }
    else if (char === ')') {
        if (stack.length === 0 || stack[stack.length - 1] !== '(') {
            return false;
        }
        stack.pop();  // Pop after confirming a match
    } else if (char === '}') {
        if (stack.length === 0 || stack[stack.length - 1] !== '{') {
            return false;
        }
        stack.pop();  // Pop after confirming a match
    } else if (char === ']') {
        if (stack.length === 0 || stack[stack.length - 1] !== '[') {
            return false;
        }
        stack.pop();  // Pop after confirming a match
    }
}

// If the stack is empty, all brackets were matched
return stack.length === 0;

};

module.exports = { isValid };


