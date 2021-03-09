import './styles.scss';

// console.log('Webpack works!');

let projects;

if (localStorage.getItem('projects') == null) {
  projects = [];
  console.log('no local storeg');
} else {
  projects = JSON.parse(localStorage.getItem('projects'));
  console.log('local storage present');
  console.log({ projects });
}

let id;

if (localStorage.getItem('currentId') == null) {
id = 0;
  console.log('no Id');
} else {
  id = JSON.parse(localStorage.getItem('currentId'));
  console.log('Id present');
  console.log({ id });
}

const todoFactory = (title, duedate, desc, note, priority) => {
  id += 1;
  return {
    id, title, duedate, desc, note, priority,
  }
};

const projectFactory = (name) => {
  const list = [];
  return { name, list };
};

const saveData = () => {
  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('currentId', id);
};

const getData = () => {
  projects = JSON.parse(localStorage.getItem('projects'));
};

// delete task from projects

const deleteItem = (task, project) => {
  console.log( { task, project });
  const currentProject = projects.find(o => o.name === project.name);
  console.log({currentProject});
  currentProject.list = currentProject.list.filter(x => x.id != task.id);

  // projects = projects.filter(i => i != currentProject);
  // projects.push(newProject);
  saveData();
  displayProject(project);

}

// const deleteOption = document.querySelector('deleteBtn');
// deleteOption.setAttribute('class', `container ${project.name}-project`);
// deleteOption.onclick = deleteItem;

const projectNameList = (list) => {
  projects.forEach((project) => list.push(project.name));
  return list;
};

const saveModifiedData = () => {
  const form = document.querySelector('#task-form');
  const title = document.querySelector('#inputtitle').value;
  const date = document.querySelector('#inputdate').value;
  const description = document.querySelector('#inputdescription').value;
  const note = document.querySelector('#inputnote').value;
  const priority = document.querySelector('#inputpriority').value;
  let projectname = document.querySelector('#inputproject').value;

  projectname = (projectname === '') ? 'default' : projectname;

  const currentTask = todoFactory(title, date, description, note, priority);
  const list = projectNameList([]);
  if (!list.includes(projectname)) {
    const newProject = projectFactory(projectname);
    projects.push(newProject);
  } else {

  }

}

const modifyItem = (item) => {
  console.log('tell');
  console.log(item);
  const title = document.querySelector('#inputtitle');
  const date = document.querySelector('#inputdate');
  const description = document.querySelector('#inputdescription');
  const note = document.querySelector('#inputnote');
  const priority = document.querySelector('#inputpriority');

  title.value = item.title;
  date.value = item.duedate;
  description.value = item.description;
  note.value = item.note;
  priority.value = item.priority;

  const newBtn = document.createElement('button');
  const div = document.querySelector('#btn-div');
  div.innerHTML = '';
  newBtn.setAttribute('class', 'btn btn-primary');
  newBtn.setAttribute('id', 'tasksubmit');
  newBtn.textContent = 'Modify Task';

  div.append(newBtn);
  newBtn.onclick = saveModifiedData;


  // const btn1 = document.querySelector('#tasksubmit');
  // btn1.textContent = 'modify task';
  console.log(item.duedate);
};


// const deleteItem = (item) => {

// }

const formatDate = (input) => {
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
  };

  const date = new Date(input);
  const result = date.toLocaleDateString('en-US', options);
  return result;
};

const displayProject = () => {
  const projectsMain = document.querySelector('#all-projects-content');
  document.querySelector('#all-projects-content').innerHTML = '';

  projects.forEach((project) => {
    const container = document.createElement('div');
    container.setAttribute('class', `container ${project.name}-project`);

    const heading = document.createElement('h3');
    heading.textContent = project.name;

    const listElement = document.createElement('ul');
    listElement.id = `${project.name}-list`;

    container.append(heading, listElement);
    projectsMain.appendChild(container);

    const listItems = project.list;
    listItems.forEach(item => {
      const listItem = document.createElement('li');
      const customDate = formatDate(item.duedate);
      // Saturday, September 17, 2016
      listItem.textContent = `${item.title}, Date: ${customDate}, Priority: ${item.priority}`;
      // const testBtn = document.createElement('button');
      const modifyBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      modifyBtn.innerHTML = '<img src="https://img.icons8.com/fluent-systems-regular/15/000000/edit-property.png" />';
      deleteBtn.innerHTML = '<img src="https://img.icons8.com/material-sharp/15/000000/delete-forever.png" />';

      // const expand = document.querySelector('modifyBtn');
      // const loose = document.querySelector('deleteBtn');

      // if (modifyBtn != null ){
      //   modifyBtn.addEventListener('onclick', modifyItem);
      // }
      modifyBtn.onclick = () => modifyItem(item);
      deleteBtn.onclick = () => deleteItem(item, project);

      // loose.addEventListener('onclick', deleteItem);

      listItem.append(modifyBtn, deleteBtn);
      listElement.appendChild(listItem);
    });
  });
};

if (projects.length === 0) {
  const defaultProject = projectFactory('default');

  projects.push(defaultProject);

  console.log('initialize');
  console.log({ projects });
} else {
  displayProject();
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
  saveData();
  displayProject(project);
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
  let projectname = document.querySelector('#inputproject').value;

  projectname = (projectname === '') ? 'default' : projectname;

  const currentTask = todoFactory(title, date, description, note, priority);
  const list = projectNameList([]);
  if (!list.includes(projectname)) {
    const newProject = projectFactory(projectname);
    projects.push(newProject);
  }
  console.log(currentTask);
  addTaskToProject(currentTask, projectname);
};

// const addTask = (title, date, description, note, priority) => {
//   this.title = title;
//   this.date = date;
//   this.description = description;
//   this.note = note;
//   this.priority = priority;
// };

// addTask.title;
// addTask.date;
// addTask.description;
// addTask.note;
// addTask.priority;

// console.log(addTask);

const btn = document.querySelector('#tasksubmit');

btn.onclick = forminput;
// document.querySelector('button').addEventListener('onclick', (event) => forminput);
