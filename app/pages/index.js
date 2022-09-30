import {
    User
} from "../model/user.js";

import {
    Task
} from "../model/task.js"

import {
    USER_NAME
} from "../shared.js";

import {
    timeToFocus
} from "../util/countdown.js";

function initializeUsers() {
    if (localStorage.getItem(USER_NAME != null)) {
        return false
    }

    var user = new User(
        USER_NAME,
        '12345',
        [],
        0
    )

    localStorage.setItem(USER_NAME, JSON.stringify(user))
}

const tasks = new Array()

const buttonAddTask = document.querySelector("#text-task")
buttonAddTask.addEventListener("click", addTask)

function addTask() {

    if (ePossivelAddTask()) {

        let taskString
        let taskContent = document.getElementsByName('tasks')[0].value
        let task = new Task(taskContent, true)
        tasks.push(task)

        taskString = ``

        tasks.forEach(task => {
            taskString += task.getTask()
        });

        document.getElementById('square-task').innerHTML = taskString

        taskString = ``
    } else {
        alert('Número máximo de task!')
    }

}

function ePossivelAddTask() {
    return tasks.length < 6 ? true : false
}

window.onload = function () {
    initializeUsers()
}