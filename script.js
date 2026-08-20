// Main Javascript code file for my study app

// Variables that retreive HTML elements
const getStartedButton = document.getElementById("getStarted");
const welcomeModal = document.querySelector(".welcome-modal");
const closeModalButton = document.getElementById("closeMessage");
const mainModal = document.querySelector(".main-modal");
const createPlaylistButton = document.getElementById("createPlaylist");
const playlistForm = document.getElementById("playlistForm");
const editModal = document.querySelector(".edit-modal");
const editModalHeader = document.getElementById("editModalHeader");
const closeEditButton = document.getElementById("closeEdit");
// const playlistFormSubmit = document.getElementById("playlistFormSubmit");
const playlistsArray = [];

const savedPlaylists = localStorage.getItem("playlists");
if (savedPlaylists) {
    const loadedPlaylists = JSON.parse(savedPlaylists);
    loadedPlaylists.forEach(function(playlistName) {
        playlistsArray.push(playlistName);
        createNewPlaylist(playlistName);
    });
}

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
    const playlistText = document.createElement("span");
    playlistText.textContent = playlistName;

    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    editButton.textContent = "Edit";
    deleteButton.style.marginLeft = "auto";
    deleteButton.style.cursor = "pointer";

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
    newPlaylist.append(playlistText);
    playlistsContainer.appendChild(newPlaylist);
    newPlaylist.appendChild(deleteButton);
    newPlaylist.appendChild(editButton);

    deleteButton.addEventListener('click', function() {
        const playlistIndex = playlistsArray.indexOf(playlistName);
        newPlaylist.remove();
        playlistsArray.splice(playlistIndex, 1);
        localStorage.setItem("playlists", JSON.stringify(playlistsArray));
    });

    editButton.addEventListener('click', function() {
        editModalHeader.textContent = playlistName;
        mainModal.style.display = "none";
        editModal.style.display = "flex";
    });
}

// Wait for user to click a button to open/close the welcome modal
getStartedButton.addEventListener('click', welcomeMessage);
closeModalButton.addEventListener('click', moveToMainModal);
createPlaylistButton.addEventListener('click', displayPlaylistForm);

playlistForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const playlistName = document.getElementById('playlistInput').value.trim();

    if (playlistName === "") {
        console.log("Playlist name left empty");
    } else {
        console.log(`User has inputted playlist: ${playlistName}.`);
        playlistsArray.push(playlistName);
        createNewPlaylist(playlistName);
        localStorage.setItem("playlists", JSON.stringify(playlistsArray));
        document.getElementById("playlistInput").value = ""; // reset form input after playlist created
        closePlaylistForm();
        createPlaylistButton.style.display = "block";
    }
});

closeEditButton.addEventListener('click', function() {
    editModal.style.display = "none";
    mainModal.style.display = "block";
});
