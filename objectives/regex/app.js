const str = "Hi there!";
const str1 = "shobanavv@gmail.com";

console.log(str);

/* 
For the name, let's match any sequence of 1-or-more characters: [a-z]+ */
let re = /[a-z]+/;
let arr = re.exec(str);
console.log(arr);
/*  [a-z]+@  */

re = /[a-z]+@/;
arr = re.exec(str1);
console.log(arr);

/* Let's look for letters, followed by a period, followed by letters or periods: [a-z]+@[a-z]+.[a-z.]+ */
re = /[a-z]+@[a-z]+.[a-z.]+/;
arr = re.exec(str1);
console.log(arr);
