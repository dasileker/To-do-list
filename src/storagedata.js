

const getData = (DataName) => {
  return JSON.parse(localStorage.getItem(DataName));
};

const saveData = (projects, id) => {
  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('currentId', id);
};

const initialize = (projects, id) => {
  if (localStorage.getItem('projects') == null) {
    projects = [];
    console.log('no local storeg');
  } else {
    projects = getData('projects');
    console.log('local storage present');
    console.log({ projects });
  }

  if (localStorage.getItem('currentId') == null) {
    id = 0;
    console.log('no Id');
  } else {
    id = getData('currentId');
    console.log('Id present');
    console.log({ id });
  }
  return ({ projects, id });
}


export { initialize, saveData};