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

let tasks = [];

function isPossibleToAddTask() {
    return tasks.length < 6 ? true : false;
}

let writeTask = (taskString) => {
    document.getElementById('square-task').innerHTML = taskString;
};

function addTask() {

    if (isPossibleToAddTask()) {

        let user = JSON.parse(localStorage.getItem('user.padrao'));
        let userTask = user._task;

        user = new User(user._username, user._password, user._minutes);

        userTask.forEach(task => {
            console.log(task.text, task.isVisible);
            /* user.addTaskUser(task[0]) */
        });

        let taskContentInput = document.getElementsByName('task-content')[0].value;

        for (const task of user.task) {
            tasks.push(task);
        }

        tasks.push(new Task(taskContentInput, true));
        let taskContent = ``;

        tasks.forEach(task => {
            taskContent += task.getTask();
            user.addTaskUser(task);
        });

        // escrevendo e zerando a variável taskContent
        writeTask(taskContent);
        taskContent = ``;


        localStorage.setItem('user.padrao', JSON.stringify(user));

        /* 

                let taskString;
                let taskContent = document.getElementsByName('task-content')[0].value;

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

                taskString = ``; */
    } else {
        window.alert('Número máximo de task!');
    }

}

function initializeUsers() {
    if (localStorage.getItem(USER_NAME) != null) {
        addTask();
        return;
    }
    let user = new User(USER_NAME, '12345', 0);

    localStorage.setItem(USER_NAME, JSON.stringify(user));
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