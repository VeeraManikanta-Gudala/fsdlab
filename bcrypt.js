var bcrypt = require('bcryptjs');

var readlineSync = require('readline-sync');

var valids = require('./valid.js');

const fs = require('fs');

function login() {

    var Username = readlineSync.question('Enter username:');

    var enteredPassword = readlineSync.question('Enter password: ', { hideEchoBack: true });

    const storedUsernames = fs.readFileSync('usernames.txt', 'utf-8').split('\n');

    const storedPasswords = fs.readFileSync('Passwords.txt', 'utf-8').split('\n');

    const userIndex = storedUsernames.indexOf(Username);

    if (userIndex !== -1) {
        const storedHashedPassword = storedPasswords[userIndex];
        const passwordMatch = bcrypt.compareSync(enteredPassword, storedHashedPassword);

        if (passwordMatch) {
            console.log('Login successful!');
        } else {
            console.log('Invalid password.');
        }
    } else {
        console.log('Username not found.');
    }
}

function signup() {
    var name = readlineSync.question('Enter Username:');

    var res = valids.validUsername(name);

    while (!res) {

        name = readlineSync.question('Enter Username:');

        res = valids.validUsername(name);
    }

    const storedUsernames = fs.readFileSync('usernames.txt', 'utf-8').split('\n');

    if (storedUsernames.includes(name)) {

        console.log('Username already exists. Please choose another one.');

        return;
    }

    
    var email = readlineSync.question('Enter Email:');
    
    var res2 = valids.validEmail(email);
    
    while (!res2) {
        email = readlineSync.question('Enter Email:');
        res2 = valids.validEmail(email);
    }
    
    
    var pass = readlineSync.question('Enter Password:', { hideEchoBack: true });
    var res3 = valids.validPassword(pass);
    while (!res3) {
        pass = readlineSync.question('Enter Password:', { hideEchoBack: true });
        res3 = valids.validPassword(pass);
    }
    
    const hashedPassword = bcrypt.hashSync(pass, 10);
    fs.appendFileSync('usernames.txt', name + '\n');
    fs.appendFileSync('emails.txt', email + '\n');
    fs.appendFileSync('Passwords.txt', hashedPassword + '\n');
    
    console.log('Signup successful!');
}

var choice = readlineSync.question('Press (1) for login\nPress (2) for signup\n');
if (choice === '1') {
    login();
} else if (choice === '2') {
    signup();
} else {
    console.log('Invalid choice.');
}
