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
    const person: {
        name: string;
        age: number;
        hobbies: string[];
        //a tuple, first element is a number, second element is a string
        role: [number, string];
    } = {
    name: 'Michael',
    age: 34,
    hobbies: ['Reading', 'Music'],
    role: [2, 'awesome']
};

//this will not work, as this is defined above
// person.role = [0, 'adimin', 'user'];

let favoriteActivites: string[];
//this would create an error:
// favoriteActivites = sports;
//this would not
// favoriteActivites = ['Reading', 'Music']

let bestActivities: any[];
bestActivities = ['Fun times', 12];
//any should only be used when needed

for (const hobby of person.hobbies) {
    //can use methods that work on inferred types
    console.log(hobby.toUpperCase());
    //map will not work on strings, this would be an error
    // console.log(hobby.map());
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