const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
	return `        <li class="list-group-item" id="data-task-${id}">
	  <div class="card" style="width: 18rem;">
		<div class="card-body">
		  <div class="alignment">
		    <h5 class="card-title" id="title">Task Name: ${name}</h5>
		    <button type="button" class="done-button btn btn-success">Mark as done</button>
		  </div>
		  <h6 class="card-subtitle mb-2 text-muted">Task Description: ${description}</h6>
		  <p class="card-text">Assigned Date: ${assignedTo}</p>
		  <p class="card-text">Due Date: ${dueDate}</p>
		  <div class="alignment">
		    <p class="card-text">Status: ${status}</p>
		    <div class="move">
		      <a href="#" class="btn btn-primary">Delete</a>
		    </div>
		  </div>
		</div>
	  </div>
</li>`;
};

class TaskManager {
	constructor(tasks, currentId) {
		this._tasks = [];
		this._currentId = 0;
	}

	addTask(name, description, assignedTo, dueDate, status = "TODO") {
		this._currentId++;
		const newTask = {
			id: this._currentId,
			name,
			description,
			assignedTo,
			dueDate,
			status
		};
		this._tasks.push(newTask);
	}

	render() {
		const taskHtmlList = [];

		// For of loop?
		for (let task of this._tasks) {
			const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, task.dueDate, task.status, task.id);
			taskHtmlList.push(taskHtml);
			const tasksHtml = taskHtmlList.join(""); // join("/n")
			document.getElementById("taskCard").innerHTML = tasksHtml;
		}

		// let currentTask = this._tasks;
		// let date =  new Date(dueDate);
		// let formattedDate = date.toString();
		// let taskHtml = currentTask.createTaskHtml(formattedDate);
		// taskHtmlList.push(taskHtml);
	}

	getTaskById(taskId) {

		let foundTask;

		for (let task of this._tasks) {
			if (task.id == taskId) {
				task = foundTask;				
			}
		}
		return foundTask
	}

}
