const newTask = document.getElementById('task');
const ul = document.querySelector('.todo-list');
const addBtn = document.getElementById('add');
const span = document.getElementById('dynamicNum');

function addTask() {
    var task = newTask.value;
    if(task){
        var li = document.createElement('li');
        li.innerHTML =` 
        <label class="container">
          <input type="checkbox">
          <div class="checkmark">
            <img src="images/icon-check.svg" alt="Check" class="check-icon">
          </div>
          <div>
            <span class="text">${task}</span>
          </div>
          <img src="images/icon-cross.svg" alt="Delete" class="delete-icon">
        </label>
        <hr>
      `;
      
        ul.appendChild(li);
        newTask.value = '';

        if (document.body.classList.contains('darkMode')) {
            li.querySelectorAll('.checkmark, input').forEach(function(item) {
                item.classList.add('darkModecheck');    
            });
        }
        updateCount(); 

        const deleteBtn = li.querySelector('.delete-icon');
deleteBtn.addEventListener('click', function () {
    li.remove(); 
    updateCount(); 
});
        var checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', updateCount);
        checkbox.addEventListener('change', textDecoration);
    }
}

function updateCount() {
    span.innerHTML = document.querySelectorAll('.todo-list input[type="checkbox"]:not(:checked)').length;
}
function textDecoration(){
    var checkboxes = document.querySelectorAll('.todo-list input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkbox.parentElement.querySelector('.text').style.textDecoration = 'line-through';
        } else {
            checkbox.parentElement.querySelector('.text').style.textDecoration = 'none';
        }
    });
    updateCount();
}

addBtn.addEventListener('click', addTask);
/********************************************** */

///* Dark Mode Toggle */
const imagemoon = document.querySelector('.image');
const header = document.querySelector('header');
var input = document.querySelectorAll('.todo');
var input2 = document.querySelectorAll('input');
var checkbox = document.querySelectorAll('.checkmark');
imagemoon.addEventListener('click', function() {
    document.body.classList.toggle('darkMode');
    header.classList.toggle('darkModeHeader');
    input.forEach(function(item) {
        item.classList.toggle('darkModecheck');
    });
    checkbox.forEach(function(item) {
        item.classList.toggle('darkModecheck');
    });
    input2.forEach(function(item) {
        item.classList.toggle('darkModecheck');
    });
    if (document.body.classList.contains('darkMode')) {
        imagemoon.src = 'images/icon-sun.svg';
    } else {
        imagemoon.src = 'images/icon-moon.svg';
    }
});

var AllBtn = document.querySelector('.All');
AllBtn.addEventListener('click', function() {
    var li = document.querySelectorAll('li');
    li.forEach(function(item) {
        item.style.display = 'block';
    });
}

);

var ActiveBtn = document.querySelector('.Active');
ActiveBtn.addEventListener('click', function() {
    var li = document.querySelectorAll('li');
    li.forEach(function(item) {
        if (item.querySelector('input[type="checkbox"]').checked) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
});

var CompletedBtn = document.querySelector('.Completed');
CompletedBtn.addEventListener('click', function() {
    var li = document.querySelectorAll('li');
    li.forEach(function(item) {
        if (item.querySelector('input[type="checkbox"]').checked) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

var ClearBtn = document.querySelector('.clear');
ClearBtn.addEventListener('click', function() {
    var li = document.querySelectorAll('li');
    li.forEach(function(item) {
        if (item.querySelector('input[type="checkbox"]').checked) {
            item.remove();
        }
    });
    updateCount(); 
});

