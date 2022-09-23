//import Task from "./task";

const buttonAddTask = document.querySelector("#add-task")
buttonAddTask.addEventListener("click", addTask)

function addTask() {
    alert('bund')
    document.getElementById('footer').innerHTML = modal
    //     `<div class="form-check">
    //     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    //     <label class="form-check-label" for="flexCheckDefault">
    //       Default checkbox
    //     </label>
    //   </div>`
}

const element = document.querySelector("#add-task");
element.addEventListener("click", myFunction);

function myFunction() {
    alert(123)
}

const modal = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>`