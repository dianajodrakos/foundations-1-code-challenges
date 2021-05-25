// Use the map method to solve these problems!

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

export function makeArrayOfNamesWithMap(arr) {
    const names = arr.map(item => item.name);
    return names;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungryArray = arr.map(item => {
        let newItem = {}
        newItem.name = item.name;
        newItem.isHungry = true; 
        newItem.type = item.type;
        return newItem;
    });
    return hungryArray;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const stringArray = arr.map(item => {
        return item.name + item.type;
    });
    return stringArray; 
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const shoutingArray = arr.map(item => {
        let newItem = {};
        newItem.name = item.name.toUpperCase();
        newItem.type = item.type;
        return newItem;
        });
    return shoutingArray;
}


/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const arrayArray = arr.map(item => {

        const nameArray = [ 'name', item.name ];
        const typeArray = [ 'type', item.type ];

        let newItem = [ nameArray, typeArray ];

        return newItem;
    });
    return arrayArray;
}