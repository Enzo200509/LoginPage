function validateForm() {
    let x = document.forms["test"]["email"]["pass"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
