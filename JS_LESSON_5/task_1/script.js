const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

const outputText = JSON.stringify(user, null, '\t');

console.log(outputText);