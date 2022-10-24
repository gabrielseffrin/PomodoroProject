'use strict';

import {
    User
} from '../model/user.js';

import {
    Task
} from '../model/task.js';

import {
    USER_NAME
} from '../shared.js';

import {
    timeToFocus
} from '../util/countdown.js';



const tasks = [];

function isPossibleToAddTask() {
    return tasks.length < 6 ? true : false;
}

let writeTask = (taskString) => {
    document.getElementById('square-task').innerHTML = taskString;
};

function addTask() {

    if (isPossibleToAddTask()) {

        let taskString;
        let taskContent = document.getElementsByName('tasks')[0].value;
        let task = new Task(taskContent, true);
        tasks.push(task);

        taskString = ``;

        tasks.forEach(task => {
            taskString += task.getTask();
        });

        writeTask(taskString);

        let user = JSON.parse(localStorage.getItem('user.padrao'));
        user._tasks = tasks;
        user = new User(user._username, user._password, user._tasks, user._minutes);
        localStorage.removeItem('user.padrao');
        localStorage.setItem('user.padrao', JSON.stringify(user));

        taskString = ``;
    } else {
        alert('Número máximo de task!');
    }

}

function initializeUsers() {
    if (localStorage.getItem(USER_NAME) != null) {
        addTask();
        return false;
    }
    let user = new User(USER_NAME, '12345', null, 0);

    localStorage.setItem(USER_NAME, JSON.stringify(user));
}

const buttonAddTask = document.querySelector('#text-task');
buttonAddTask.addEventListener('click', addTask);

window.onload = function () {
    initializeUsers();
};