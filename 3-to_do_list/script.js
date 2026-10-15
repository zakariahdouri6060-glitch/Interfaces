console.log('Cagrando la lista');

const poner = document.querySelector('#input_list');
const task = document.querySelector('#task');

const list = document.querySelector('#list');

const button = document.querySelector('#insert');

let step = 1;


button.addEventListener('click', function(event){
    
    
    event.preventDefault();
    const itemText = document.getElementById('task').value.trim();
    if(itemText){
        const newItem = document.createElement('li');
        const newBox = document.createElement('input');
        
        newBox.type = 'checkbox';

        newItem.append(newBox, document.createTextNode(itemText))

        document.getElementById('list').appendChild(newItem);
        
        document.getElementById('task').value = '';
    }
    

})