const TASK_ITEM_CLASS = 'task-item';
const TASK_LIST_CLASS= 'task-list';
const DELETE_BTN_CLASS = 'delete-btn';
const HIDDEN_CLASS = 'hidden';
const ERROR_INPUT_CLASS = 'errorInput';

const TASK_ITEM_TEMPLATE =
    document.getElementById('taskItemTemplate').innerHTML;

const addBtn = document.getElementById('addBtn');
const taskNameInputFirstName = document.getElementById('taskNameInputFirstName');
const taskNameInputLastName = document.getElementById('taskNameInputLastName');
const taskNameInputPhone = document.getElementById('taskNameInputPhone');
const taskList = document.getElementById('taskList');
const errorContainer = document.getElementById('errorContainer');

document
    .getElementById('addTaskForm')
    .addEventListener('submit', onAddTaskFormSubmit);
taskNameInputFirstName.addEventListener('keyup', onTaskNameInput);
taskNameInputLastName.addEventListener('keyup', onTaskNameInput);
taskNameInputPhone.addEventListener('keyup', onTaskNameInput);
document.addEventListener('click', onTaskItemClick);

addTask('Hello world!');

function onAddTaskFormSubmit(e) {
    e.preventDefault();
    submitForm();
}

function onTaskNameInput() {
    validateForm();
}

function onTaskItemClick(e) {
       if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTask(e.target.closest('.' + TASK_LIST_CLASS));
    }
}

function submitForm() {
    const title = getTaskName();

    addTask(title);
    clearTaskNameInput();
}

function validateForm() {
    const title = getTaskName();
    const error = validateTaskName(title);

    if (error) {
        showError(error);
    } else {
        hideError();
    }
}

function validateTaskName() {
    if (taskNameInputFirstName.value===''||taskNameInputLastName.value===""||taskNameInputPhone.value==="") 
		return ERROR_MESSAGES.REQUIRED;
	    return null;
}

function getTaskName() {
	
    taskNameInputFirstName.value;
		taskNameInputLastName.value;
		return taskNameInputPhone.value;
		
}

function clearTaskNameInput(value) {
	taskNameInputFirstName.value='';
	taskNameInputLastName.value='';
	taskNameInputPhone.value='';
    
}

function addTask(title) {
    const taskItemHtml = createTaskHTML(title);

    taskBody.insertAdjacentHTML('beforeend', taskItemHtml);
}

function createTaskHTML() {
    return TASK_ITEM_TEMPLATE.replace('{{title1}}', taskNameInputFirstName.value )
                              .replace ('{{title2}}', taskNameInputLastName.value )
															.replace ('{{title3}}', taskNameInputPhone.value );
															
}

function showError(msg) {
    errorContainer.textContent = msg;
    errorContainer.classList.remove(HIDDEN_CLASS);
    taskNameInputFirstName.classList.add(ERROR_INPUT_CLASS);
		taskNameInputLastName.classList.add(ERROR_INPUT_CLASS);
		taskNameInputPhone.classList.add(ERROR_INPUT_CLASS);
    addBtn.disabled = true;
}

function hideError() {
    errorContainer.textContent = '';
    errorContainer.classList.add(HIDDEN_CLASS);
    taskNameInputFirstName.classList.remove(ERROR_INPUT_CLASS);
		taskNameInputLastName.classList.remove(ERROR_INPUT_CLASS);
		taskNameInputPhone.classList.remove(ERROR_INPUT_CLASS);
    addBtn.disabled = false;
}

function deleteTask(el) {
    el.remove();
}
