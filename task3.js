//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function findMostFrequentElement(arr) {

    const frequencyCounter = {};

    for (const num of arr) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }

    let mostFrequentElement;
    let maxFrequency = 0;

    for (const num in frequencyCounter) {
        if (frequencyCounter[num] > maxFrequency) {
            mostFrequentElement = parseInt(num);
            maxFrequency = frequencyCounter[num];
        }
    }

    return mostFrequentElement;
}


const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findMostFrequentElement(inputArr);
console.log(result); 
