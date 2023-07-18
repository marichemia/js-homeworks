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
