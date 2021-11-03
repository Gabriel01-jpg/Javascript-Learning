const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function(e){ // Recebendo evendo de pressionar tela no input -- KEYPRESS - PRESSIONA A TECLA
    if(e.keyCode === 13){
        createTask(inputTask.value)
        
    }
})

function clearInput(){
    inputTask.value = '';
    inputTask.focus();
}

function createBtnDelete(li){
    li.innerText += ' ';
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Apagar';
    btnDelete.setAttribute('class', 'delete')
    li.appendChild(btnDelete);
}

function saveTasks(){
    const liTask = tasks.querySelectorAll('li')
    let listTasks = [];

    for (let task of liTask){
        let taskText = task.innerText.replace('Apagar', '').trim(); //replace substitui o valor de apagar por nada e trim remove espaços vázios no final.
        listTasks.push(taskText)
    }
    const taskJSON = JSON.stringify(listTasks)
    localStorage.setItem('tasks', taskJSON);
}

function createTask(inputText) {
    const li = createLi();
    li.innerText = inputText;
    tasks.appendChild(li);
    clearInput();
    createBtnDelete(li);
    saveTasks();
}

function addSaveTasks(){
    const tasks = localStorage.getItem('tasks');
    const ListTasks = JSON.parse(tasks)
    for(let task of ListTasks){
        createTask(task)
    }
}

addSaveTasks()

btnTask.addEventListener('click', function(){
   if(!inputTask.value) return; // RETORNA CASO O VALOR SEJA VAZIO 
    createTask(inputTask.value)
})

document.addEventListener('click', function(e){
    const el = e.target; // recebe o evento de click
    if(el.classList.contains('delete')){ // verifica se o evento de click contém a classe 'delete'
        el.parentElement.remove(); // Remover o elemento pai desse elemento
        saveTasks();
    }

})