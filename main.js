// Function to handle button click
function handleClick() {
    const messages = [
        'Hello, world!',
        'You clicked the button!',
        'Have a great day!',
        'Keep smiling!',
        'JavaScript is fun!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Event listener for button click
const button = document.createElement('button');
button.innerText = 'Click Me!';
button.addEventListener('click', handleClick);

// Append button to the body
document.body.appendChild(button);