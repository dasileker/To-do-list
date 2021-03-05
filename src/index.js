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

const defaultProject = projectFactory('Default');
const cleaning = projectFactory('Cleaning');
const cooking = projectFactory('Cooking');

projects.push(defaultProject);
projects.push(cleaning);
projects.push(cooking);

const room1 = todoFactory('Clean my room', '1/2/2021', 'test', 'a', 'Low');
const room2 = todoFactory('Clean my room2', '1/2/2021', 'test', 'a', 'Low');

cleaning.list.push(room1);
cleaning.list.push(room2);

console.log({ projects });

const form = document.querySelector('#task-form');

const forminput = () => {
  // console.log(form);
  console.log('Inside the function!!');
  return false;
// break;
};

document.querySelector('#tasksubmit').addEventListener('onclick', forminput);
