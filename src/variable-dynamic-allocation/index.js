'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

let object = {};
// const languages = ['javascript', 'typescript'];

// const dynamic_variable = () => {
//   return new Promise(resolve => {
//     for (const language of languages) {
//       object[`${language}`] = `${language}`;
//     }
//     console.log(object.javascript);
//   });
// };

// dynamic_variable();

for (let i = 0; i < 10; i++) {
  object[`variable${i}`] = 'test';
}

console.log(object);