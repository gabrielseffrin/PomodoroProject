import {
  Task
} from "../model/task.js"

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