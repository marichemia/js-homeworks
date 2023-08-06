/* Classes Task 1 */

class Validator {

  isEmail(str) {
    return  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str);
  }

  isDomain(str) {
    return /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/.test(str);
  }

  isDate(str) {
    return /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(str);
  }

  isPhone(str) {
    return /^\+375 \((29|33|44|25)\) \d{3}-\d{2}-\d{2}$/.test(str)
  }

}


/* Classes Task 2 */

class MyString {

  reverse(str) {
    return str.split('').reverse().join('');
  }

  ucFirst(str) {
    return str.replace(str[0], str[0].toUpperCase());
  }

  ucWords(str) {
    let words = str.split(' ');
    
    for(let i = 0; i < words.length; i++) {
      words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase())
    }
    
    return words.join(' ');
  }


}




