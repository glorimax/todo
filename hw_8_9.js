const root = document.getElementById('root');

const container = document.createElement('div');
container.classList.add('container');

const headLine = document.createElement('div');
headLine.classList.add('headline');

const deleteAllBtn = document.createElement('button');
deleteAllBtn.classList.add('header-btn');
deleteAllBtn.textContent = 'Delete all';

const todoInput = document.createElement('input');
todoInput.placeholder = 'Введите задачу...';
todoInput.classList.add('entertodo');

const addBtn = document.createElement('button');
addBtn.classList.add('header-btn');
addBtn.textContent = 'Add';

root.append(container);
container.append(headLine);
headLine.append(deleteAllBtn, todoInput, addBtn);

function getTask(text){
    const task = document.createElement('div');
    task.classList.add('task');
    
    const uniqueId = document.getElementsByClassName('task');
    for (let i = 0; i < uniqueId.length; i++) {
        uniqueId[i].setAttribute('id', i + 1);
    }

    const lc = document.createElement('div');
    lc.classList.add('lc');

    const textTodo = document.createElement('div');
    textTodo.classList.add('texttodo');
    textTodo.innerHTML = `<span>${text}</span>`;

    const date = document.createElement('span');
    date.classList.add('date');
    date.innerText = (new Date()).toLocaleString();

    const rc = document.createElement('div');
    rc.classList.add('rc');

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done', 'check');
    doneBtn.innerHTML = '';
    doneBtn.addEventListener('click', () => {
        doneBtn.innerText = doneBtn.innerText === '' ? '✓' : '';
        
        textTodo.classList.toggle('check');
        task.classList.toggle('check');
        doneBtn.classList.toggle('check');
        
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'delete');
    deleteBtn.innerText = 'X';
    deleteBtn.addEventListener('click', () => task.remove());

    task.append(lc, rc);
    lc.append(textTodo, date);
    rc.append(doneBtn, deleteBtn);

    return task;

}

const createTask = () => {
    if (!todoInput.value) return;

    const text = todoInput.value;
    container.append(getTask(text));
    todoInput.value = '';

};

const deleteAll = () => {
    const taskAll = document.querySelectorAll('.task');
    taskAll.forEach ((task) => task.remove());

};

deleteAllBtn.addEventListener('click', deleteAll);

addBtn.addEventListener('click', createTask);
