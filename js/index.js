let tasks = new TaskManager();

// let taskHTML = createTaskHtml("hi","hi","hi","hi","hi")
// console.log(taskHTML)

const validFormFieldInput = (e) => {
	e.preventDefault();
	const newTaskNameInput = document.querySelector("#TaskName");
	const name = newTaskNameInput.value;
	console.log("Task name:  " + name);

	const newTaskDescriptionInput = document.querySelector("#newTaskDescriptionInput");
	const description = newTaskDescriptionInput.value;
	console.log("Task Description:  " + description);

	const newAssignedInput = document.querySelector("#Assigned");
	const assigned = newAssignedInput.value;
	console.log("Assigned To:  " + assigned);

	const newDueDateInput = document.querySelector("#newDueDateInput");
	const dueDate = newDueDateInput.value;
	console.log("Due Dute:  " + dueDate);

	tasks.addTask(name, description, assigned, dueDate);
	tasks.render()

	document.getElementById('myForm').reset()

};

if (newTaskDescriptionInput.value === "") {
    document.getElementById("error").classList.add("fade");
} else if (newTaskDescriptionInput.value === newTaskDescriptionInput.value)  {
    document.getElementById("error").classList.add("show");
}

const markAsDoneButton = document.querySelector('tasksList');
markAsDoneButton.addEventListener('click', (event => {

}))