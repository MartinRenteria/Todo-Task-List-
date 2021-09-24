class TaskManager {
	constructor(tasks, currentId) {
		this._tasks = [];
		this._currentId = 0;
	}

	addTask(name, description, assignedTo, dueDate, status, id) {
		this._currentId++;
		this._tasks.push(name, description, assignedTo, dueDate, "TODO", this._currentId);
	}
}

let tasks1 = new TaskManager();
let tasks2 = new TaskManager();
let tasks3 = new TaskManager();

console.log(tasks1);
tasks2.addTask("hello", "hi", "hi", "hello", "hi");
console.log(tasks2)
tasks3.addTask("hell", "hi", "hi", "hello", "hi");
console.log(tasks3)