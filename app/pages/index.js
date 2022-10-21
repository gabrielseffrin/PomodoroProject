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

function initializeUsers() {
    if (localStorage.getItem(USER_NAME) != null) {
        return false;
    }
    let user = new User(USER_NAME, '12345', null, 0);

    localStorage.setItem(USER_NAME, JSON.stringify(user));


}

const tasks = [];

function ePossivelAddTask() {
    return tasks.length < 6 ? true : false;
}

function addTask() {

    if (ePossivelAddTask()) {

        let taskString;
        let taskContent = document.getElementsByName('tasks')[0].value;
        let task = new Task(taskContent, true);
        tasks.push(task);

        taskString = ``;

        tasks.forEach(task => {
            taskString += task.getTask();
        });

        document.getElementById('square-task').innerHTML = taskString;

        taskString = ``;
    } else {
        alert('Número máximo de task!');
    }

}


const buttonAddTask = document.querySelector("#text-task");
buttonAddTask.addEventListener("click", addTask);

window.onload = function () {
    initializeUsers();
};