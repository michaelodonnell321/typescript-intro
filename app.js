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
var person = {
    name: 'Michael',
    age: 34,
    hobbies: ['Reading', 'Music']
};
var favoriteActivites;
//this would create an error:
// favoriteActivites = sports;
//this would not
// favoriteActivites = ['Reading', 'Music']
var bestActivities;
bestActivities = ['Fun times', 12];
//any should only be used when needed
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
//nested objects work as you would expect:
// const product = {
//     id: 'example',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//         title: 'Red Carpet',
//         description: 'A great carpet - almost brand new!'
//     }
// }
//type of the object:
// {
//     id: string;
//     price: number;
//     tags: string[],
//     details: {
//         title: string;
//         description: string;
//     }
// }
console.log(person.name);
