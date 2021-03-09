// const modifyItem = (item, project) => {
//   console.log('tell');
//   console.log(item);
//   const title = document.querySelector('#inputtitle');
//   const date = document.querySelector('#inputdate');
//   const description = document.querySelector('#inputdescription');
//   const note = document.querySelector('#inputnote');
//   const priority = document.querySelector('#inputpriority');
//   const projectform = document.querySelector('#inputproject');

//   title.value = item.title;
//   date.value = item.duedate;
//   description.value = item.description;
//   note.value = item.note;
//   priority.value = item.priority;
//   projectform.value = project.name;

//   const newBtn = document.createElement('button');
//   const div = document.querySelector('#btn-div');
//   div.innerHTML = '';
//   newBtn.setAttribute('class', 'btn btn-primary');
//   newBtn.setAttribute('id', 'tasksubmit');
//   newBtn.textContent = 'Modify Task';

//   div.append(newBtn);
//   newBtn.onclick = () => saveModifiedData(item, project);

//   // const btn1 = document.querySelector('#tasksubmit');
//   // btn1.textContent = 'modify task';
//   console.log(item.duedate);
// };

// export { modifyItem };