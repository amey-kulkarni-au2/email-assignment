var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["emailId"] = document.getElementById("emailId").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("emailList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.emailId;
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("emailList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("emailId").value == "") {
        isValid = false;
        document.getElementById("emailIdVerification").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailIdVerification").classList.contains("hide"))
            document.getElementById("emailIdVerification").classList.add("hide");
    }
    return isValid;
}