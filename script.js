// Main Javascript code file for my study app

// Variables that retreive HTML elements
const getStartedButton = document.getElementById("getStarted");
const welcomeModal = document.querySelector(".welcome-modal");
const closeModalButton = document.getElementById("closeMessage");
const mainModal = document.querySelector(".main-modal");

// Functions for changing the CSS to display/hide the welcome modal
function welcomeMessage() {
    welcomeModal.style.display = "block";
}

function closeModal() {
    welcomeModal.style.display = "none";
}

function displayMainModal() {
    mainModal.style.display = "block";
}

function moveToMainModal() {
    closeModal();
    displayMainModal();
}

// Wait for user to click a button to open/close the welcome modal
getStartedButton.addEventListener('click', welcomeMessage);
closeModalButton.addEventListener('click', moveToMainModal);
