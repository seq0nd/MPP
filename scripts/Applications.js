let ApplArray = [{
  name: '',
  date: ''
  //isChecked: ''
}];

if (localStorage.getItem("test1")) {
  ApplArray = JSON.parse(localStorage.getItem("test1"));
}


const renderList = () => {

  let ApplArrayHTML = '';


  ApplArray.forEach(function(applicationObject, index){
    const name = applicationObject.name;
    const date = applicationObject.date;
    const html = `
    <div class="css-name" id="idName">${name}</div>
    <div class="css-date" id="idDate">${date}</div>
    <button
    onclick="
    ApplArray.splice(${index},1);
    renderList();
    "
    class="css-delete">Delete</button>
    <input type="checkbox" class="css-AbsageChk box" id="idCancel" onclick="">
    <label class="css-Absage">Cancellation</label>
    `;

    ApplArrayHTML += html;
  });


  document.querySelector('.js-data').innerHTML = ApplArrayHTML;

  localStorage.setItem("test1", JSON.stringify(ApplArray));
}


renderList();


const addApplication = () => {
  const inputNameElement = document.querySelector('.js-input-name');
  const inputDateElement = document.querySelector('.js-input-date');

  const name = inputNameElement.value;
  const date = inputDateElement.value;

  ApplArray.push({
    name: name,
    date: date
  });

  document.querySelector('.js-input-name').value = '';
  document.querySelector('.js-input-date').value = '';

  renderList();
}


 //Should Check if the checkbox is checked if yes it makes a line through  the name and date, to show that it is no longer important 

const checkCancel = () => {

  /*
  let checkbox = document.getElementById('idCancel').checked;
  //const name = document.getElementById('idName');
  //const date = document.getElementById('idDate');

  if(checkbox === true){
    ApplArray.push({
      isChecked: 'true'
    });
    checkbox.checked = true;
  }
  else if(checkbox === false){
    ApplArray.push({
      isChecked: 'false'
    });
    checkbox.checked = false;
  }
  console.log(ApplArray);
  console.log(checkbox);
  */

}
