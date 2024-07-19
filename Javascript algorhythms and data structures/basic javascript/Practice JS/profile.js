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
var checkname;
var checkprop;
var propdata;  // 3 vars
for (var i=0; i<contacts.length;i++){
    checkname=contacts[i].hasOwnProperty("firstName");
    console.log(checkname);

    
} 





//loop all data
//check firstname
//checkfirst has or not
//check prop
//prop has or not
//see data in prop
//out retrn prop data to output
//out return text to output
}
lookUpProfile("Akira","likes");