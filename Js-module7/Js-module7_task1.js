// Task-1 To create a textarea and if a user makes changes to it without saving then show an alert that data is not saved.

let changes = false;

function Savebtn() {
    changes = true;
    alert('Data Saved, Now you can leave the page');
}

window.onbeforeunload = function() {
    if (!changes) return "";
};