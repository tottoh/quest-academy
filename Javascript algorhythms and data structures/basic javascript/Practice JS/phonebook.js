var ContactList = [{ name: "Alice", phone: "123-456-7890" },{ name: "Bob", phone: "987-654-3210" }];

function displayContact() {
    console.log("Contacts List:");
    if (ContactList.length === 0) {
        console.log("No contacts to display");
    }
    if (ContactList.length >= 1) {
        console.log(`1. ${ContactList[0].name} - ${ContactList[0].phone}`);
    }
    if (ContactList.length >= 2) {
        console.log(`2. ${ContactList[1].name} - ${ContactList[1].phone}`);
    }
    if (ContactList.length >= 3) {
        console.log(`3. ${ContactList[2].name} - ${ContactList[2].phone}`);
    }
    if (ContactList.length >= 4) {
        console.log(`4. ${ContactList[3].name} - ${ContactList[3].phone}`);
    }
    if (ContactList.length >= 5) {
        console.log(`5. ${ContactList[4].name} - ${ContactList[4].phone}`);
    }
console.log("Total contacts:", ContactList.length);
}

function addContact(name,phone) {
    ContactList.push({ name: name, phone: phone });
    console.log(`Added new contact: ${name},${phone}`)
}




function removeContact(name,phone) {
    let removedContact =  ContactList.shift([0]);
    console.log(`Removed contact: ${name},${phone}`)
}


displayContact(); 
addContact("Somchai","081-888-8888");
displayContact(); 
removeContact("Alice","123-456-7890");
displayContact(); 


/*
// Global variable to store contacts
let contacts = [
    { name: "Alice", phone: "123-456-7890" },
    { name: "Bob", phone: "987-654-3210" }
    ];
*/

// Function to add a new contact
// Function to remove a contact
// Function to display all contacts and the total number of contacts
// Add more if necessary
// Test the functions

/* 
Added new contact: Charlie - 555-123-4567
Contact List:
1. Alice - 123-456-7890
2. Bob - 987-654-3210
3. Charlie - 555-123-4567
Total number of contacts: 3

Removed contact: Alice - 123-456-7890
Contact List:
1. Bob - 987-654-3210
2. Charlie - 555-123-4567
Total number of contacts: 2
*/