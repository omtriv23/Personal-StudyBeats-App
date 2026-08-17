// Main Javascript code file for my study app

// Variables that retreive HTML elements
const getStartedButton = document.getElementById("getStarted");
const welcomeModal = document.querySelector(".welcome-modal");
const closeModalButton = document.getElementById("closeMessage");
const mainModal = document.querySelector(".main-modal");
const createPlaylistButton = document.getElementById("createPlaylist");
const playlistForm = document.getElementById("playlistForm");
const playlistFormSubmit = document.getElementById("playlistFormSubmit");

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
    playlistForm.style.marginTop = "2vh"; // adding new CSS parameter and setting its value
}

function closePlaylistForm() {
    playlistForm.style.display = "none";
}

function createNewPlaylist(playlistName) {
    const newPlaylist = document.createElement("div");
    newPlaylist.textContent = playlistName;

    newPlaylist.style.display = "flex";
    newPlaylist.style.justifyContent = "center";
    newPlaylist.style.alignItems = "center";
    newPlaylist.style.backgroundColor = "var(--light-purple)";
    newPlaylist.style.color = "var(--dark-indigo)";
    newPlaylist.style.width = "60%";
    newPlaylist.style.maxWidth = "600px";
    newPlaylist.style.height = "7vh";
    newPlaylist.style.margin = "2vh auto";
    newPlaylist.style.textAlign = "center";
    newPlaylist.style.borderRadius = "7px";
    newPlaylist.style.border = "4px solid var(--purple)";

    const playlistsContainer = document.getElementById("playlists");
    playlistsContainer.appendChild(newPlaylist);
}

// Wait for user to click a button to open/close the welcome modal
getStartedButton.addEventListener('click', welcomeMessage);
closeModalButton.addEventListener('click', moveToMainModal);
createPlaylistButton.addEventListener('click', displayPlaylistForm);

playlistForm.addEventListener('submit', function(event) {
    event.preventDefault();
    closePlaylistForm();

    const playlistName = document.getElementById('playlistInput').value;

    if (playlistName.trim() === "") {
        console.log("Playlist name left empty");
    } else {
        console.log(`User has inputted playlist: ${playlistName}.`);
        createNewPlaylist(playlistName);
        createPlaylistButton.style.display = "block";
    }
});
