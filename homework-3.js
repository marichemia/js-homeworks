/* Arrays task 1 */


function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("invalid input, parameter must be an array");
    }
    let sum = 0;
    function add(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                add(arr[i]);
            } else if (typeof arr[i] === "number") {
                sum += arr[i];
            } else {
                throw new Error("Array must contain only numbers or arrays");
            }
        }
    }
    add(arr);
    return sum;
}


/* Arrays task 2 */

function reverse(arr) {
  if (!Array.isArray(arr)) {
        throw new Error("invalid input, parameter must be an array");
    }


    arr.sort((a, b) => arr.indexOf(b) - arr.indexOf(a));

    return arr;
}


/* Array task 3 */

function rotate(arr, num, str = 'right') {
  if (!Array.isArray(arr)) {
        throw new Error("invalid input, arr must be an array");
    }

  if (typeof num !== 'number') {
        throw new Error("invalid input, num must be a number");
    }

  if (typeof str !== 'string') {
        throw new Error("invalid input, str must be a string");
    }


    for (let i = 0; i < num % arr.length; i++) {
      if (str === 'right') {
        arr.unshift(arr.pop());
      } else if (str === 'left') {
        arr.push(arr.shift());      }
    }

    return arr;
}

