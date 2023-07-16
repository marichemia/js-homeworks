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

/* Functions task 2 */

