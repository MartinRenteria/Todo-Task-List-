let tasks = new TaskManager();

tasks.load()
tasks.render()

const newTaskNameInput = document.querySelector("#TaskName");
const newTaskDescriptionInput = document.querySelector("#newTaskDescriptionInput");
const newAssignedInput = document.querySelector("#Assigned");
const newDueDateInput = document.querySelector("#newDueDateInput");

const validFormFieldInput = (e) => {
	e.preventDefault();
	const name = newTaskNameInput.value;
	const description = newTaskDescriptionInput.value;
	const assigned = newAssignedInput.value;
	const dueDate = newDueDateInput.value;

	tasks.addTask(name, description, assigned, dueDate);
	tasks.save();
	tasks.render();

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

const taskList = document.querySelector("#taskList");

taskList.addEventListener("click", (event) => {
	if (event.target.classList.contains("done-button")) {
		let parentTask = event.target.parentNode.parentNode.parentNode.parentNode;
        let taskId = parseInt(parentTask.getAttribute("data-task-id"));
        let task = tasks.getTaskById(taskId);
        task.status = 'Done';

		if (task.status === 'Done') {
            event.target.classList.remove('visible');
            event.target.classList.add('invisible');
        } 

		tasks.render();
        tasks.save();
	}
});