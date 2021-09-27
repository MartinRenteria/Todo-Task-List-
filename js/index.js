let tasks = new TaskManager();

const newTaskNameInput = document.querySelector("#TaskName");
const newTaskDescriptionInput = document.querySelector("#newTaskDescriptionInput");
const newAssignedInput = document.querySelector("#Assigned");
const newDueDateInput = document.querySelector("#newDueDateInput");

const validFormFieldInput = (e) => {
	e.preventDefault();
	const name = newTaskNameInput.value;
	console.log("Task name:  " + name);

	const description = newTaskDescriptionInput.value;
	console.log("Task Description:  " + description);

	const assigned = newAssignedInput.value;
	console.log("Assigned To:  " + assigned);

	const dueDate = newDueDateInput.value;
	console.log("Due Dute:  " + dueDate);

	tasks.addTask(name, description, assigned, dueDate);
	tasks.render();
	console.log(tasks)

	document.getElementById("myForm").reset();
};

// Event listener for alert notification. Defines conditions for alert to appear

document.getElementById("btn").addEventListener("click", function() {
	const name = newTaskNameInput.value;

	const description = newTaskDescriptionInput.value;

	const assigned = newAssignedInput.value;

	const dueDate = newDueDateInput.value;

	if (name === "") {
		document.getElementById("error").innerHTML = `<div id="error" class="alert alert-primary" role="alert">
	Please input name field!
  </div>`;
	} else if (description === "") {
		document.getElementById("error").innerHTML = `<div id="error" class="alert alert-primary" role="alert">
	Please input description field!
  </div>`;
	} else if (assigned === "") {
		document.getElementById("error").innerHTML = `<div id="error" class="alert alert-primary" role="alert">
	Please input assignedTo field!
  </div>`;
	} else if (dueDate === "") {
		document.getElementById("error").innerHTML = `<div id="error" class="alert alert-primary" role="alert">
Please input the Due Date field!
</div>`;
	} else {
		document.getElementById("error").innerHTML = `<div id="error" class="alert alert-primary" role="alert">
	Your task card been added!
  </div>`;
	}
});

// Event listerner for mark as done button. 

const markAsDoneButton = document.querySelector('#tasksList');


markAsDoneButton.addEventListener('click', (event) => {
	console.log('Got it')
	if (event.target.classList.contains('done-button')) {

		let parentTask = event.target.parentNode.parentNode.parentNode.parentNode
		console.log(parentTask)

	}
});



