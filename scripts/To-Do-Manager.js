let ToDoArray = [{
  name: '',
  dueDate: ''
}];

if (localStorage.getItem("test")) {
  ToDoArray = JSON.parse(localStorage.getItem("test"));
}

renderToDo();


function renderToDo(){

  let ToDoArrayHTML = '';

  ToDoArray.forEach(function(todoObject, index){
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div> 
    <button onclick="
    ToDoArray.splice(${index}, 1);
    renderToDo();
    " class="css-Delete-button">Delete</button>
    `;

    ToDoArrayHTML += html;
   
  });

  /*
  for(let i = 0; i < ToDoArray.length; i++){
    const todoObject = ToDoArray[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div> 
    <button onclick="
    ToDoArray.splice(${i}, 1);
    renderToDo();
    " class="css-Delete-button">Delete</button>
    `;

    ToDoArrayHTML += html;

  }
 */
  
  document.querySelector('.js-todos').innerHTML = ToDoArrayHTML;

  localStorage.setItem("test", JSON.stringify(ToDoArray));
}


function addToDo(){

  const inputElement = document.querySelector('.js-input-todo');
  const inputDate = document.querySelector('.js-date');

  const todo = inputElement.value;
  const todate = inputDate.value; 

  
  if(todo !== '' && todate !== '')
    ToDoArray.push({
      name: todo,
      dueDate: todate
    });
  else if(todo === '' && todate === ''){
    window.alert("Fügen sie ein To-Do hinzu.")
  }
  else if(todo !== '' || todate === ''){
    window.alert("Fügen sie ein Datum hinzu.")
  }
  else if(todo === '' || todate !== ''){
    window.alert("Fügen sie einen Namen hinzu.")
  }

  document.querySelector('.js-input-todo').value = '';
  document.querySelector('.js-date').value = '';

  renderToDo();
}