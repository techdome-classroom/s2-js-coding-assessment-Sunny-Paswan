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
        else if (char === ')'){
            
        }

};

module.exports = { isValid };


