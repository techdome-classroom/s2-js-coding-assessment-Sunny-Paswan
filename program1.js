/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var open = 0;
    var close = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            open++:
        }
    }
};

module.exports = { isValid };


