// --- Part 1: Mastering JavaScript Basics ---
// Variable declarations, data types, operators, and conditionals
let userName = "Julie";
let userAge = 22;
let isStudent = true;

// Conditional logic
if (userAge >= 18 && isStudent) {
    console.log(`${userName} is a university student in Kenya.`);
    document.getElementById('output').innerText = `${userName} is a university student in Kenya.`;
} else {
    console.log(`${userName} does not meet the criteria.`);
    document.getElementById('output').innerText = `${userName} does not meet the criteria.`;
}

// --- Part 2: JavaScript Functions ---
// Function to calculate the sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Function to format a greeting message 
function formatGreeting(name) {
    return `Habari, ${name}! Karibu kwenye JavaScript.`; // Swahili greeting
}

console.log(formatGreeting(userName));

// --- Part 3: JavaScript Loops ---
// For loop example: Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`Number: ${i}`);
}

// Array and forEach loop example ---
const fruits = ["Mango", "Pawpaw", "Avocado", "Banana", "Passion" ];
fruits.forEach(function(fruit) {
    console.log(`Common fruit in Kenya: ${fruit}`);
});

// --- Part 4: Mastering the DOM ---
// 1. Change text content on button click
const toggleBtn = document.getElementById('toggleBtn');
let toggled = false;
toggleBtn.addEventListener('click', function() {
    toggled = !toggled;
    document.getElementById('output').innerText = toggled ? "Ujumbe umewashwa!" : "Ujumbe umezimwa!"; // Swahili for message ON/OFF
});

// 2. Dynamically create and add a new element
const newElement = document.createElement('p');
newElement.innerText = "Hii sentensi imeongezwa na JavaScript!"; // Swahili: This sentence was added with JavaScript
document.body.appendChild(newElement);

// 3. Toggle a CSS class on the output div
function toggleHighlight() {
    document.getElementById('output').classList.toggle('highlight');
}
setTimeout(toggleHighlight, 2000); // Toggle highlight after 2 seconds

// --- End of Assignment ---
