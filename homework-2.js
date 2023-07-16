/* Error Handling task 1 */

try {
	const value = 100
	const nearLimit = 90;
	const limit = 100;  
  	
    if (value>limit) {
    	throw new Error ('value has exceeded the limit');
    } else if (value > nearLimit) {
    	throw new Error ('value has nearly reached the limit');
    }
  
} catch (err) {
	if (err.message == 'value has nearly reached the limit'){
  	console.log('value has nearly reached the limit');
  } else {
  throw err;
  }
}

/* Functions task 1 */

function getDivisors(num){
	
  if (typeof num !== 'number') {
    throw new Error ('parameter type is not a Number')
  }

  if (num <= 0) {
    throw new Error ('parameter cannot be equal to or less than 0');
  }

  const divisors = [];

  for (let i=0; i<=num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;

}

const number = 12;

try {
  console.log(getDivisors (number));
} catch (e) {
  console.log(e.message)
}


/* Functions task 2 */

function f (arr){
	
  if (!Array.isArray(arr)) {
    throw new Error ('parameter type should be an array');
  }
  
  if (arr.length === 0) {
    throw new Error ('parameter cant be an empty');
  }
  
  for (let i of arr) {
    if (typeof i !== 'number') {
      throw new Error ('parameter type should be array of numbers');
    }
  }

  for (let i of arr) {
    console.log(i);
  }

}

const array = [1, 2, 3];

try {
  f (array);
} catch (e) {
  console.log(e.message)
}

/* Function task 3*/

function genericFunction (func) {
  try {
    func();
  } catch (e) {
    console.log(e.message);
  }
}

function sayHello () {
  console.log('Hello World');
}

genericFunction(sayHello);

