'use strict';

import {
    User
} from '../model/user.js';

import {
    Task
} from '../model/task.js';

import {
    USER_NAME,
    USER_TASKS
} from '../shared.js';

import {
    timeToFocus,
    updateTimeUser
} from '../util/countdown.js';

let tasks = [];

function isPossibleToAddTask() {
    return tasks.length < 6 ? true : false;
}

let writeTask = (taskString) => {
    document.getElementById('square-task').innerHTML = taskString;
};

function addTask(inputTaks) {

    if (isPossibleToAddTask()) {


        console.log(inputTaks)

        let task = JSON.parse(localStorage.getItem(USER_TASKS));
        let taskString = '';
        console.log(task)

        task.forEach(task => {
            tasks.push(new Task(task._text, task._isVisible));
        });

        tasks.forEach(task => {
            taskString += task.getTask();
        });
        writeTask(taskString);
        console.log(tasks);
        localStorage.setItem(USER_TASKS, JSON.stringify(tasks));
    } else {
        window.alert('Número máximo de task!');
    }

}

document.getElementById('submit-task').onclick = () => {
    if (isPossibleToAddTask()) {
        addTask(tasks.push(new Task(document.getElementsByName('task-content')[0].value, true)));

    }
};

function initializeUsers() {
    if (localStorage.getItem(USER_NAME) != null && localStorage.getItem(USER_TASKS) != null) {
        addTask();
        updateTimeUser(0);
        return;
    }
    let user = new User(USER_NAME, 0);
    let userTasks = [];

    localStorage.setItem(USER_NAME, JSON.stringify(user));
    localStorage.setItem(USER_TASKS, JSON.stringify(userTasks));
}

function isNameValid() {
    let name = document.getElementById('inputName').value;

    if (!name.match('[A-Z][a-z].* [A-Z][a-z].*'))
        window.alert('Nome Inválido');
}

document.getElementById('salvar').onclick = () => {
    isNameValid();
};

// salvano uma tarefa 
const buttonAddTask = document.querySelector('#submit-task');
buttonAddTask.addEventListener('click', addTask);

window.onload = function () {
    initializeUsers();
};