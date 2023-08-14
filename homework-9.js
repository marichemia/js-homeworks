/* Task 1 */


function send(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          reject(`We have error, status code: ${response.status}`);
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}


/* Task 2 */

class Countries {
	
  constructor (str) {
  	
    if (typeof str !== 'string') {
    	throw new Error('parameter must be a string')
    }
  
  	this.countriesUrl = str;
  }
  
  send (region) {
  	
    if (typeof region !== 'string') {
    	throw new Error('parameter must be a string')
    }
    
    const url = `${this.countriesUrl}?region=${region}`;
    
    return new Promise((resolve, reject) => {
    	fetch(url)
      	.then (response => {
        	if (response.status === 200) {
          	return response.json();
          } else {
          	reject (`We have error, status code: ${response.status}`);
          }
        })
        .then (data => {
        	resolve (data.data);
        })
        .catch (e => {
        	reject (e);
        })
    })
    
  }

}

