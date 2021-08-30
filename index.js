const validFormFieldInput = (e) => {
console.log(e);
e.preventDefault();
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const name = newTaskNameInput.value;
console.log("Task name:  "+name);

const newTaskDescriptionInput = document.querySelector('#newTaskDescriptionInput');
const Description = newTaskDescriptionInput.value;
console.log("Task Description:  "+Description);

const newAssignedInput = document.querySelector('#newAssignedInput');
const Assigned = newAssignedInput.value;
console.log("Assigned To:  "+Assigned);

const newDueDateInput = document.querySelector('#newDueDateInput');
const DueDate = newDueDateInput.value;
console.log("Due Dute:  "+DueDate);

if (newTaskNameInput.value === "") {
    document.getElementById("myError").style.display = "block"
} 

else {
    document.getElementById("myError").style.display = ""
    document.getElementById("myForm").reset();
}

}