console.log('Cagrando la lista');

const poner = document.querySelector('#input_list');
const task = document.querySelector('#task');

const list = document.querySelector('#list');

const button = document.querySelector('#insert');

let step = 1;


button.addEventListener('click', function(event){
    
    
    event.preventDefault();

    const name_task = document.getElementById('task').value;
    
    let content = list.innerHTML = name_task;

})