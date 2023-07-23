/* Functions task 1 */

function mix (...args) {

  if (!args.every(arg => typeof arg === 'function')) {
    throw new Error ('All parameters must be functions');
  }

  let result = args[0]();

  for (let i = 0; i < args.length; i++) {
    result = args[i](result);
  }

  return result;

}

/* Functions task 2 */

function mix (...args) {

  if (!args.every(arg => typeof arg === 'function')) {
    throw new Error ('All parameters must be functions');
  }

  let result = args[0]();
  let errorsArr = [];

  
  for (let i = 0; i < args.length; i++) {
    try{
      result = args[i](result);
    } catch (e){
      errorsArr.push({
        name: e.name,
        message: e.message, 
        stack: e.stack, 
        level: i
      });
      continue;
    }
  }

  return {
    errors: errorsArr,
    value: result
  };

}


/* String task 1 */

function rmHtmlTags (str) {

if (typeof str !== 'string') {
  throw new Error ('Parameter must be a string')
}

return str.replace(/<[^>]*>/g, '');
 

}

/* String task 2 */

function reverseCase (sentence) {

if (typeof sentence !== 'string') {
  throw new Error ('Parameter must be a string')
}

let reversedStr = [];

for (let i = 0; i<sentence.length; i++) {
  if (sentence[i] === ' ') {
    reversedStr.push(' ')
  } else if (sentence[i].charCodeAt() >= 65 && sentence[i].charCodeAt() <= 90) {
    reversedStr.push(sentence.charAt(i).toLowerCase());
  } else if (sentence[i].charCodeAt() >= 97 && sentence[i].charCodeAt() <= 122) {
    reversedStr.push(sentence.charAt(i).toUpperCase());
  }
}
 
return reversedStr.join('');

}

/* String task 3 */

function searchWord (sentence, word) {

if (typeof sentence !== 'string' || typeof word !== 'string') {
  throw new Error ('Parameters must be strings')
}

let count = sentence.split(word).length - 1;



return `'${word}' was fount ${count} times.`;

}
