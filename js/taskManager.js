const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
	let doneButtonVisibility = 'visible';
    if (status === 'Done') {
        doneButtonVisibility = 'invisible';
    }

    let pillColor = 'btn-secondary';
    if (status === 'ToDo') {
        pillColor = 'btn-warning';
    } else {
        pillColor = 'btn-success';
    }

	return `        <li class="list-group-item" data-task-id = "${id}">
	  <div class="card" style="width: 18rem;">
		<div class="card-body" id="data-task-id">
		  <div class="alignment">
		    <h5 class="card-title" id="title">Task Name: ${name}</h5>
			<button type="button" class="btn btn-secondary btn-sm done-button ${doneButtonVisibility}">Mark as done</button>
			</div>
		  <h6 class="card-subtitle mb-2 text-muted">Task Description: ${description}</h6>
		  <p class="card-text">Assigned Date: ${assignedTo}</p>
		  <p class="card-text">Due Date: ${dueDate}</p>
		  <div class="alignment">
		  <span class="badge badge-pill ${pillColor} pull-right" id="green-status">Status: ${status}</span>
		  <div class="move">
		      <a href="#" class="btn btn-primary delete-button">Delete</a>
		    </div>
		  </div>
		</div>
	  </div>
</li>`
};


class TaskManager {
	constructor(tasks, currentId) {
		this._tasks = [];
		this._currentId = 0;
	}

	addTask(name, description, assignedTo, dueDate, status = "ToDo") {
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
			// let currentTask = this._tasks;
			// // let date =  new Date(currentTask.dueDate);
			// // let formattedDate = date.toDateString();
			const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, task.dueDate, task.status, task.id);
			taskHtmlList.push(taskHtml);
			const tasksHtml = taskHtmlList.join(""); // join("/n")
			document.getElementById("taskCard").innerHTML = tasksHtml;
		}
	}

	getTaskById(taskId) {
		let foundTask

		for (let task of this._tasks) {
			if (task.id == taskId) {
				foundTask = task
			}
		}
		return foundTask
	}

	save() {
	let taskJson = JSON.stringify(this._tasks)	
	localStorage.setItem('tasks', taskJson)

	let currentId = JSON.stringify(this._currentId)
	localStorage.setItem('currentid', currentId)
	}

	load() {

        if (localStorage.getItem('tasks')) {
            let tasksJson = localStorage.getItem('tasks');
            this._tasks = JSON.parse(tasksJson);
        } 

        if(localStorage.getItem('currentId')) {
            let currentId = localStorage.getItem('currentId');
            this._currentId = parseInt(currentId);
        }

	}

	deleteTask() {
		let newTask = []
	}

}
