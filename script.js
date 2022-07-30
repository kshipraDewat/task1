document.querySelector("#btn").onclick = function(){
    if(document.querySelector('#taskAdd input').value.length==0){
        alert("please enter some task!");
    }
    else{
        document.querySelector('#totaltasks').innerHTML += `<div class="task"><span class="taskname"> ${document.querySelector("#taskAdd input").value} </span><button class="delete">X</button></div>`;
    }
    let currentTask = document.querySelectorAll('.delete');

    for( let i =0 ; i <currentTask.length; i++){
        currentTask[i].onclick = function(){
            this.parentNode.remove();
        }
    }

   let Tasks = document.querySelectorAll('.taskname');

    for( let i =0 ; i < Tasks.length; i++){
        Tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
    document.querySelector('#taskAdd input').value= "";
}