const {assert, expect} = require('chai');
const {describe, it} = require('mocha');
const TaskManager = require('../js/taskManager.js').TaskManager;

describe('TaskManager functions', () => {
    describe('addTask function', () => {
        it('should add a task to new task', () => {
            // Set up
            const task = new TaskManager();
            // Excerise 
            task.addTask('Martin', 'Is coding', 'programming', '9/29/2021', 'ToDo');
            //Verify
            assert.ok(task._tasks.length == 1)
        })
    })

    describe('deleteTask function', () => {
        it('should delete a task from tasks', () => {
            // Set up
            const task = new TaskManager();
            //Excerise
            task.addTask('Martin', 'Is coding', 'programming', '9/29/2021', 'ToDo');
            task.deleteTask(1);
            //Verify
            assert.ok(task._tasks.length == 0);
        })
    })

    describe('getTaskById function', () => {
        it('should compare return current task form task', () => {
            // Set up 
            const task = new TaskManager()
            // Excerise
            task.addTask('Martin', 'Is coding', 'programming', '9/29/2021', 'ToDo');
            const resultId = task.getTaskById(1);

            task.addTask('Martin', 'Is coding', 'programming', '9/29/2021', 'ToDo');
            const expectedId = task.getTaskById(2)
            // verify
            assert.ok(resultId, expectedId)
        })
    })
})
