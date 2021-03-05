import './styles.scss';

console.log('Webpack works!');

const projects = [];

const todoFactory = (title, duedate, desc, note, priority) => ({
  title, duedate, desc, note, priority,
});

const projectFactory = (name) => {
  const list = [];
  return { name, list };
};

const defaultProject = projectFactory('default');
const cleaning = projectFactory('cleaning');
const cooking = projectFactory('cooking');

projects.push(defaultProject);
projects.push(cleaning);
projects.push(cooking);

const room1 = todoFactory('Clean my room', '1/2/2021', 'test', 'a', 'Low');
const room2 = todoFactory('Clean my room2', '1/2/2021', 'test', 'a', 'Low');

cleaning.list.push(room1);
cleaning.list.push(room2);

console.log({ projects });

const displayProject = (project, listElement) => {
  listElement.innerHTML = '';
  const listItems = project.list;
  listItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.title}, Date: ${item.duedate}, Priority: ${item.priority}`;
    listElement.appendChild(listItem);
  });
};

// Adds a task to the project (project is a string)
const addTaskToProject = (task, project) => {
  const currentProject = projects.find(o => o.name === project);
  currentProject.list.push(task);
  const listElement = document.querySelector('#default-list');
  displayProject(currentProject, listElement);
};

// Parses the form input
const forminput = () => {
  const form = document.querySelector('#task-form');
  const title = document.querySelector('#inputtitle').value;
  const date = document.querySelector('#inputdate').value;
  const description = document.querySelector('#inputdescription').value;
  const note = document.querySelector('#inputnote').value;
  const priority = document.querySelector('#inputpriority').value;

  const currentTask = todoFactory(title, date, description, note, priority);
  addTaskToProject(currentTask, 'default');
};

const addTask = (title, date, description, note, priority) => {
  this.title = title;
  this.date = date;
  this.description = description;
  this.note = note;
  this.priority = priority;
};

addTask.title;
addTask.date;
addTask.description;
addTask.note;
addTask.priority;

// console.log(addTask);

const btn = document.querySelector('#tasksubmit');

btn.onclick = forminput;
// document.querySelector('button').addEventListener('onclick', (event) => forminput);
