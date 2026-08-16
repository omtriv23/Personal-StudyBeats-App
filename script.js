// Main Javascript code file for my study app

// Variables that retreive HTML elements
const getStartedButton = document.getElementById("getStarted");
const welcomeModal = document.querySelector(".welcome-modal");
const closeModalButton = document.getElementById("closeMessage");
const mainModal = document.querySelector(".main-modal");
const createPlaylistButton = document.getElementById("createPlaylist");
const playlistForm = document.getElementById("playlistForm");

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

function displayPlaylistForm() {
    createPlaylistButton.style.display = "none";
    playlistForm.style.display = "block";
    playlistForm.style.marginTop = "2%"; // adding new CSS parameter and setting its value
}

// Wait for user to click a button to open/close the welcome modal
getStartedButton.addEventListener('click', welcomeMessage);
closeModalButton.addEventListener('click', moveToMainModal);
createPlaylistButton.addEventListener('click', displayPlaylistForm);
