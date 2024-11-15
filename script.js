// script.js

// Mouse Events
const hoverBtn = document.getElementById('hover-btn');
const hoverMessage = document.getElementById('hover-message');

hoverBtn.addEventListener('mouseenter', () => {
  hoverMessage.textContent = 'You are hovering over the button!';
});

hoverBtn.addEventListener('mouseleave', () => {
  hoverMessage.textContent = 'You stopped hovering over the button.';
});

// Keyboard Events
const keyInput = document.getElementById('key-input');
const keyMessage = document.getElementById('key-message');

keyInput.addEventListener('keyup', (event) => {
  keyMessage.textContent = `You pressed: ${event.key}`;
});

// Form Events
const form = document.getElementById('test-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page refresh
  formMessage.textContent = 'Form submitted successfully!';
});

// Focus and Blur Events
const focusInput = document.getElementById('focus-input');
const focusMessage = document.getElementById('focus-message');

focusInput.addEventListener('focus', () => {
  focusMessage.textContent = 'Input is focused!';
});

focusInput.addEventListener('blur', () => {
  focusMessage.textContent = 'Input lost focus.';
});

// Event Delegation
const buttonContainer = document.getElementById('button-container');
const delegationMessage = document.getElementById('delegation-message');

buttonContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    delegationMessage.textContent = `${event.target.textContent} was clicked!`;
  }
});
