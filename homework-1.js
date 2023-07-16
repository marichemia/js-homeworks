/*  Task 1 */

let arr = [2, 5, 9, 15, 0, 4];
for (let i=0; i<arr.length; i++) {
	if (arr[i] > 3 && arr[i] < 10) {
    console.log(arr[i]);
  }
}

/* Task 2 */

const n = 1000;
let result = n;
let num = 0;

while(result > 50) {
  result /= 2;
  num++;
}

/* Task 3 */

while (Math.floor(Math.random() * 10) !== 5) {
  console.log('not 5')
}

console.log(5) 
