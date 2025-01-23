// Global variable and will create an empty array with name task 

let tasks =[];

// add task function
function addTask(){
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    console.log(task);

    if(task !=='')
    {
        tasks.push(task);
        console.log(task);
        input.value='';
        displaytasks()
    }

}

function removeTask(index){
    tasks.splice(index,1);
    displaytasks();
}


function displaytasks(){
    const tasklist= document.getElementById('taskList');
    let html='';

    for(let i=0; i<tasks.length;i++){
        html +=`
        <div class="task-item">
        <spam class="task-text"> ${i+1}. ${tasks[i]}</spam>
       
       <div class="button-group">
       <button class="delete-btn" onclick="removeTask(${i})" >Delete </button
       </div>

        </div>
        `;
    }

    





    tasklist.innerHTML= html;

}