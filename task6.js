//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPass(length) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const specialChar = '!@#$%^&*()_-+=<>?/{}~';

    const allCharacters = uppercase + lowercase + number + specialChar;

    let pass = '';
    for (let i = 0; i <= length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        pass += allCharacters.charAt(randomIndex);
    }

    return pass;
}


const passwordLength = 8; 
const randomPass = generateRandomPass(passwordLength);
console.log(randomPass);

