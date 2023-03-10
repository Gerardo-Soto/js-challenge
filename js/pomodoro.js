
// list to keep tasks,  task = { id, title, completed}
const tasks = [];

// timer
let time = 0
let timer = null;
// 5 minutes break
let timerBreak = null;

let currentTask = null;


// get data
const form = document.querySelector('#form');
const idTask = document.querySelector('#idTask');
const buttonAdd = document.querySelector('#buttonAdd');

renderTime();
renderTask();

// events
form.addEventListener('submit', e => {
    //dont send form native
    e.preventDefault();

    if(idTask.value !== ''){
        createTask(idTask.value);
        // clean input
        idTask.value = '';
        renderTask();
    }
});


function createTask(value){
    // create a object to the info
    const newTask = {
        // id random
        id : parseInt(Math.random() *1000),
        title : value,
        completed : false
    }
    tasks.unshift(newTask);
}

function renderTask(){
    const htmlTasks =  tasks.map(task => {
        return  `
        <div class="task">
            <div class="completed">${task.completed ? 
                `<span class="done" data-id="${task.id}">Done</span>` :
                `<button class="start-button" data-id="${task.id}">Start</button>`
            }</div>
            <div class="title">${task.title}</div>
        </div>
        `
    });

    // render:
    const tasksContainer = document.querySelector('#tasks');
    // tasks.map return a list, type(htmlTasks) = list
    tasksContainer.innerHTML = htmlTasks.join('');

    // render - buttons
    const startButtons = document.querySelectorAll(".task .start-button");

    startButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // timer is not activated
            if(!timer){
                // get id of task
                const id = parseInt(button.getAttribute("data-id"));
                /*

                Expression regular............

                */
                // my function start timer
                startButtonHandler(id);
                // change text button from "Start" to "In progress"
                button.textContent = "In progress..";
            }
        });
    });
}


function startButtonHandler(id){
    // seconds by Pomodoro
    //time = 25 * 60;
    // time test
    time = 8;
    currentTask = id;

    const taskIndex = tasks.findIndex(task => task.id === id);
    //console.log(typeof(id), typeof(tasks[0].id));
    const taskName = document.querySelector('.time #time__taskName');
    //console.log(taskIndex);
    taskName.textContent = "Task in progress: " + tasks[taskIndex].title;
    
    //timer 1 sec
    timer = setInterval(() => {
        timeHandler(id);
    }, 1000);
}

function timeHandler(id){
    time--;// -1 second
    //render time format mm:ss
    renderTime();

    // stop function setInterval when time = 0
    if (time === 0) {
        
        clearInterval(timer);// stop setInterval > https://www.w3schools.com/jsref/met_win_clearinterval.asp
        //currentTask = null;// end task
        
        //renderTime();

        // mark task as completed
        const taskName = document.querySelector(".time .taskName");
        taskName.textContent = "";
        completedTask(id);
        
        timer = null;
        renderTask();

        pomodoroRest();
    }
}

function renderTime(){
    const timeDiv = document.querySelector('.time .value');
    const timeMinutes = parseInt(time / 60);
    const timeSeconds = parseInt(time % 60);

    timeDiv.textContent = `${timeMinutes < 10 ? "0" : ""}${timeMinutes}:${timeSeconds < 10 ? "0" : ""}${timeSeconds}`;
}

function completedTask(id){
    const currentTaskIndex = tasks.findIndex(task => task.id === id);

    tasks[currentTaskIndex].completed = true;
}

function pomodoroRest(){
    const taskName = document.querySelector(".time .taskName");
    taskName.textContent = "Pomodoro break";

    time = 5;

    timerBreak = setInterval(() => {
        timerBreakHandler();
    }, 1000);

}

function timerBreakHandler(){
    time--;// -1 second
    
    //render time format mm:ss
    renderTime();

    //stop function setInterval
    if (time === 0) {
        clearInterval(timerBreak);// [] <- = setInterval()
        currentTask = null;
        // 
        const taskName = document.querySelector(".time .taskName");
        taskName.textContent = "Pomodoro break finished.";

        renderTask();
    }
}