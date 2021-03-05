import './styles.scss';

// console.log('Webpack works!');

let projects ;

if (localStorage.getItem('projects') == null) {
  projects = [];
  console.log('no local storeg');
} else {
  projects = JSON.parse(localStorage.getItem('projects'))
  console.log('local storage present');
  console.log({ projects });
}



const todoFactory = (title, duedate, desc, note, priority) => ({
  title, duedate, desc, note, priority,
});

const projectFactory = (name) => {
  // getData();
  const list = [];
  return { name, list };
};

const saveData = () => {
  localStorage.setItem('projects', JSON.stringify(projects))
}

const getData = () => {
  projects = JSON.parse(localStorage.getItem('projects'))
}

const displayProject = (project, listElement) => {
  // getData();
  listElement.innerHTML = '';
  const listItems = project.list;
  listItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.title}, Date: ${item.duedate}, Priority: ${item.priority}`;
    listElement.appendChild(listItem);
  });
};

if (projects.length === 0) {
  const defaultProject = projectFactory('default');
  const cleaning = projectFactory('cleaning');
  const cooking = projectFactory('cooking');

  projects.push(defaultProject);
  projects.push(cleaning);
  projects.push(cooking);

  console.log('initialize');
  console.log({ projects });
} else {
  const currentProject = projects.find(o => o.name === 'default');
  const listElement = document.querySelector('#default-list');
  displayProject(currentProject, listElement);
}


// const room1 = todoFactory('Clean my room', '1/2/2021', 'test', 'a', 'Low');
// const room2 = todoFactory('Clean my room2', '1/2/2021', 'test', 'a', 'Low');

// cleaning.list.push(room1);
// cleaning.list.push(room2);

// console.log({ projects });


// Adds a task to the project (project is a string)
const addTaskToProject = (task, project) => {
  const currentProject = projects.find(o => o.name === project);
  currentProject.list.push(task);
  const listElement = document.querySelector('#default-list');
  saveData();
  displayProject(currentProject, listElement);
};

//  store the list of tasks
// let listElement = [];


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
