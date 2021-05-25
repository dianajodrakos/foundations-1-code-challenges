// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.


/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let newArray = [];
    arr.forEach((item) => {
        newArray.push(item.name);
    });
    return newArray;
}


/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let newArray = [];
    arr.forEach((item) => {
        newArray.push(item.type);
    });
    return newArray.reverse();
}



/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let newArray = [];
    
    arr.forEach((item) => {
        newArray.push({'nombre': item.name, 'tipo': item.type});
    })
    return newArray;
}

