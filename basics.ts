

/**
 * TYPES OF TYPESCRIPT: BASICS
 * number : 1,2,3,4,5
 *  string : 'heehee'
 * boolean: true, false,
 * object: {}
 * array: [1,2,3,4]
 * tuple: [number , string]
 * enum: enum Role {}
 * any: anything
 */



// const person: {
//   name: string;
//   age: number;
//   nickname: string;
//   hobbies: string[];
//   role: [number, String];   //tuples 

// } = {
//   name: "Gustavo",
//   age: 20,
//   nickname: "Guga",
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }


// enums
enum Role {
  ADMIN, READ_ONLY, AUTHOR
}


const person = {
  name: "Gustavo",
  age: 20,
  nickname: "Guga",
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN 
}
