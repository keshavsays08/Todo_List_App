const tasksArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[]

console.log(tasksArray)

document.querySelector("#saveTask").addEventListener("click",()=>{
    const addTask = document.querySelector("#addTask")
    createItem(addTask)
})
function createItem(task){
    tasksArray.push(task.value)
    localStorage.setItem("tasks",JSON.stringify(tasksArray))
    location.reload()
  }

console.log(tasksArray);





function displayTasks(){
    let tasks ="";
    for(i=0; i<tasksArray.length; i++){
        tasks += `
        <div class="tasks">
            <div class="input-controller">
            <textarea disabled >${tasksArray[i]}</textarea>
            <div class="edit-controller">
                <button class="deleteBtn">Done</button>
                <button class="editBtn">Edit</button>
            </div>
            </div>
            <div class="update-controller">
                <button class="saveBtn">Save Changes</button>
                <button class="cancelBtn">Cancel</button>
            </div>
        </div>`
    }
    document.querySelector(".to-do-list").innerHTML = tasks

    
}


function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db,i)=>{
        db.addEventListener("click",()=>{
              deleteItem(i)
        })

    })
} 


function deleteItem(i){

    tasksArray.splice(i, 1)
    localStorage.setItem("tasks",JSON.stringify(tasksArray))
    location.reload()
}
function activateEditListeners(){
    const editBtn =  document.querySelectorAll(".editBtn")
    const  updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb,i)=>{
        eb.addEventListener("click",()=>{
            updateController[i].style.display = "block"
            inputs[i].disabled=false
        })
    })
}
function activateSaveListeners(){
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sb,i)=>{
        sb.addEventListener("click",()=>{
            updateItem(inputs[i].value,i)
        })
    })

}

function updateItem(text,i){
    tasksArray[i] = text
    localStorage.setItem("tasks",JSON.stringify(tasksArray))
    location.reload();
}

// function activateCancelListeners(){
//    const cancelBtn = document.querySelectorAll(".cancelBtn")
//    const updateController  = document.querySelectorAll(".update-controller")
//    const inputs  = document.querySelectorAll(".input-controller textarea")
//    cancelBtn.forEach((cb,i)=>{
//     cb.addEventListener("click",()=>{
//         updateController[i].stlye.display = "none";
//         inputs[i].disabled  = true;
//     })
//    })
// }
function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll(".cancelBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");
    cancelBtn.forEach((cb, i) => {
      cb.addEventListener("click", () => {
        const updateController = cb.parentElement;
        updateController.style.display = "none";
        inputs[i].disabled = true;
      });
    });
  }
function clearAll (){
    const clearAllBtn = document.querySelector("#clearAllBtn");
    clearAllBtn.addEventListener("click",()=>{
        localStorage.clear();
        location.reload();
    })
}





//date func
function displayDate()  {
    let date = new Date()
    
    date = date.toString().split(" ")
    console.log(date)
    document.querySelector("#date").innerHTML = date[1]+" "+date[2]+" "+date[3]
 } 


  //onload
window.onload = function(){
    displayDate()
    displayTasks()
    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
    clearAll();

}



// let task1
// let value = prompt("Enter the value of note.")
// if (value != null) {
//     localStorage.setItem("Note", value)
// }

// let shownote = localStorage.getItem("Note")
// alert("Your note is " + shownote)

// let confirmDeletion = confirm("Do you want to remove your previously typed note?")
// if (confirmDeletion) {
//     localStorage.removeItem("Note")
//     alert("Note has been deleted")
// }else {
//     alert("Note has been preserved")
// }


// Retrieve the textarea element
// const textarea = document.getElementById("newTask");

// // Add an event listener to the "Save Task" button
// const saveTaskButton = document.getElementById("saveTask");
// saveTaskButton.addEventListener("click", () => {
//   // Retrieve the task value from the textarea
//   const task = textarea.value;

//   // Retrieve the existing tasks from local storage (if any)
//   const existingTasks = localStorage.getItem("tasks");

//   // Create a new array or object to store the tasks
//   let tasks = [];

//   // Check if there are existing tasks in local storage
//   if (existingTasks) {
//     // Parse the existing tasks string into an array or object
//     tasks = JSON.parse(existingTasks);
//   }

//   // Add the new task to the tasks data structure
//   tasks.push(task);

//   // Convert the tasks data structure to a string
//   const tasksString = JSON.stringify(tasks);

//   // Store the tasks string in local storage
//   localStorage.setItem("tasks", tasksString);
// });

// Function to update the task list
// function updateTaskList() {
//     // Retrieve the tasks from local storage
//     const tasksString = localStorage.getItem("tasks");
    
//     // Clear the task list
//     taskList.innerHTML = "";
  
//     // Check if there are tasks in local storage
//     if (tasksString) {
//       // Parse the tasks string into an array
//       const tasks = JSON.parse(tasksString);
  
//       // Loop through the tasks and add them to the task list
//       tasks.forEach(task => {
//         const taskElement = document.createElement("div");
//         taskElement.textContent = task;
//         taskList.appendChild(taskElement);
//       });
//     }
//   }

//   updateTaskList()
// let taskListArray =[];
// function saveTask(){
//     debugger;
//    let taskName=document.getElementById("newTask").value;
//    let todoObj={
    
//     taskId: todoListArray.length +1,
//     taskName: taskName
//    }
//    taskListArray.push("todoObj");
// }
