import { modifyItem, deleteItem } from './index';

const formatDate = (input) => {
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
  };

  const date = new Date(input);
  const result = date.toLocaleDateString('en-US', options);
  return result;
};

const displayProjects = (projects) => {
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
      modifyBtn.onclick = () => modifyItem(item, project);
      deleteBtn.onclick = () => deleteItem(item, project);

      // loose.addEventListener('onclick', deleteItem);

      listItem.append(modifyBtn, deleteBtn);
      listElement.appendChild(listItem);
    });
  });
};

export { displayProjects, formatDate };