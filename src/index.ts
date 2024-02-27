export {};

// Type 'Promise' is not assignable to type in TypeScript

// EXAMPLE 1 - Resolve the promise before the assignment

async function example() {
  const result = await Promise.resolve('bobbyhadz.com');
  return result;
}

example().then((value) => {
  const str: string = value;
  console.log(str); // 👉️ "bobbyhadz.com"
});

// ---------------------------------------------------

// // EXAMPLE 2 - Using the `await` syntax to resolve the promise

// async function example() {
//   // 👇️ const result: string
//   const result = await Promise.resolve('bobbyhadz.com');

//   const greeting: string = result;

//   return greeting;
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Working with asynchronous code

// async function example() {
//   const result = await Promise.resolve({
//     name: 'Bobby Hadz',
//     country: 'Chile',
//   });

//   return result;
// }

// type Person = {
//   name: string;
//   country: string;
// };

// example().then((value) => {
//   const person: Person = value;
//   console.log(person); // 👉️ {name: 'Bobby Hadz', country: 'Chile'}
// });

// // 👇️ code here runs before example().then() has finished
