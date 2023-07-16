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

