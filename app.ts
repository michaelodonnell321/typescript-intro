//can make an object a generic typescript object with : object
// const person: object = {
//     name: 'Michael',
//     age: 34
// };

//typescript object with typed keys looks thusly, though this is bad practice:
// const person: {
//     name: string;
//     age: number;
// } = {
    //good practice
    const person = {
    name: 'Michael',
    age: 34
};

console.log(person.name);