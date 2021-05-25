// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {

    let screamingKeys = {};
    let keys = Object.keys(someObject)
    
    keys.forEach(key => {
        //console.log(someObject);
        const newKey = key.toUpperCase();
        // console.log(newKey);
        screamingKeys[newKey] = someObject[key];
        // console.log(screamingKeys[newKey], someObject[key]);

    });
    return screamingKeys;
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    let string = '';
    let keys = Object.keys(someObject)
        keys.forEach(key => {
            string +=`${key}`;
    });
    // console.log(string);
    return string;
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    let tuples = [];
    let keys = Object.keys(someObject)
        keys.forEach(key => {
        // console.log(key, someObject[key]);
        const newTuple = [ key, someObject[key] ];
        // console.log(newTuple);
        tuples.push(newTuple);
    });
    return tuples;
}
