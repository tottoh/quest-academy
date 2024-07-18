//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
var namecheck;
var propcheck;
var propdata;
for (var i=0; i<contacts.length; i++){
    namecheck = contacts[i].firstName;
console.log(namecheck);
if (namecheck === name) {
    propcheck= contacts[i].hasOwnProperty(prop);
    console.log(propcheck);
    if(propcheck){
        propdata = contacts [i][prop];
        console.log (propdata);
        return propdata;
    } 
    else {
        return "No such property";
    }
}
}
return "No such contact"

}
// Only change code above this line


// Change these values to test your function
lookUpProfile("Akira", "likes");