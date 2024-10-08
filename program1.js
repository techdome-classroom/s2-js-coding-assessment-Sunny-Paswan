/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let container = [];

  for (let char in s) {
    if (char === "(") {
      container.push("(");
    } else if (char === "{") {
      container.push("{");
    } else if (char === "[") {
      container.push("[");
    } else if (char === ")") {
      if (container.length === 0 || container[container.length - 1] !== "(") {
        return false;
      }
      stack.pop();
    } else if (char === "}") {
      if (container.length === 0 || container[container.length - 1] !== "{") {
        return false;
      }
      container.pop();
    } else if (char === "]") {
      if (container.length === 0 || container[container.length - 1] !== "[") {
        return false;
      }
      container.pop();
    }

    return container.length === 0;
  }
};

module.exports = { isValid };
