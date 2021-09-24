const task1 = new TaskManager();
task1.addTask(name)

const validFormFieldInput = (e) => {
	e.preventDefault();
	const newTaskNameInput = document.querySelector("#TaskName");
	const name = newTaskNameInput.value;
	console.log("Task name:  " + name);

	const newTaskDescriptionInput = document.querySelector("#newTaskDescriptionInput");
	const Description = newTaskDescriptionInput.value;
	console.log("Task Description:  " + Description);

	const newAssignedInput = document.querySelector("#Assigned");
	const Assigned = newAssignedInput.value;
	console.log("Assigned To:  " + Assigned);

	const newDueDateInput = document.querySelector("#newDueDateInput");
	const DueDate = newDueDateInput.value;
	console.log("Due Dute:  " + DueDate);

};

if (newTaskDescriptionInput.value === "") {
    document.getElementById("error").classList.add("fade");
} else if (newTaskDescriptionInput.value === newTaskDescriptionInput.value)  {
    document.getElementById("error").classList.add("show");
}

// Toss properties into div container from class object. Pull data from array?

document.createElement('div')