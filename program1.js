/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    container = [];

    for char in s:
        if char =='(':
        container.append('(')
        else if char == '{':
        container.append('{')
        else if char == '[':
        container.append('[')

};

module.exports = { isValid };


