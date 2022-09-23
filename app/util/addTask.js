import {
  Task
} from "../model/task.js"

//index of task
let index
const tasks = new Array
let taskString = ``

(function () {
  index = 0
}())

console.log(index)

const buttonAddTask = document.querySelector("#text-task")
buttonAddTask.addEventListener("click", addTask)

function addTask() {
  let taskContent = document.getElementsByName('tasls')[0].value
  let task = new Task(taskContent, true)

  taskString += `<div class="task">
  <input type="checkbox" name="" id="">
  ${tasks[0]}
      </div> `

  tasks.push(task)
  index++
  document.getElementById('square-task').innerHTML = taskString


}