// Jesse Ruonakoski TIK22SP

let userForm = document.querySelector("form");
let checkImportant = document.getElementById("importantCheck");
let importantNotes = document.getElementById("importantNote");
let notes = document.getElementById("basicNote");
let userNote = [];

document.getElementById("submitButton").addEventListener("click", fillForm);

importantNotes.style.visibility = "hidden";
notes.style.visibility = "hidden";

let today = new Date();

/**
 * @param {Event} event
 */

function fillForm(event) {
    event.preventDefault();

    let formData = new FormData(userForm);
    let uzername = formData.get("writeName");
    let uzernote = formData.get("writeNote");

    let userInformation = {
        userName: uzername,
        userNote: uzernote,
    }

    userNote.push(userInformation);
    displayEverything();
}

function displayEverything() {
    let noteHeader = document.createElement("h4");
    let noteItself = document.createElement("p");
    
    noteHeader.innerText += today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
    noteHeader.innerText += " (" + userNote.slice( -1 )[0].userName + ") ";
    noteItself.innerText = userNote.slice( -1 )[0].userNote;
    
    if ( checkImportant.checked == true ) {
        importantNotes.style.visibility = "visible";
        importantNotes.classList.add("importantNote");
        importantNotes.append(noteHeader);
        importantNotes.append(noteItself);

    } else {
        notes.style.visibility = "visible";
        notes.classList.add("basicNote");
        notes.append(noteHeader);
        notes.append(noteItself);
    }
}