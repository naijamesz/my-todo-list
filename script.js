'use strict';

var ul = document.querySelector('ul');
var txtInput = document.querySelector("input[type='text']");
var plusIcon = document.querySelector('.fa-plus');

ul.addEventListener('click', function (event) {
  //Check off Todo
  event.target.classList.toggle('completed');

  //Fade Out & Delete todo
  fadeAndDelete(event);
});

// Add New Todo
txtInput.addEventListener('keypress', function (event) {
  if (event.charCode === 13) {
    //Grab Text from input
    var todoText = this.value;
    //Delete entered text from input
    this.value = '';
    //Append new <li> to <ul>
    ul.innerHTML += "<li><span><i class='fas fa-trash'></i></span> " + todoText + '</li>';
  }
});

// Toggle Plus Icon
plusIcon.addEventListener('click', function () {
  if (txtInput.style.display === 'none') {
    txtInput.classList.remove('plusHide');
    txtInput.style.display = 'block';
  } else {
    txtInput.classList.add('plusHide');
    setTimeout(function () {
      txtInput.style.display = 'none';
    }, 500);
  }
});

//Fade Out & Delete todo function
function fadeAndDelete(event) {
  var _event = event.target.parentElement;

  if (_event.tagName === 'SPAN') {
    //Fade Out
    _event.parentElement.classList.add('fadeOut');

    //Delete Delay
    setTimeout(function () {
      _event.parentElement.outerHTML = '';
    }, 300);
  } else if (event.target.tagName === 'SPAN') {
    //Fade Out
    _event.classList.add('fadeOut');

    //Delete Delay
    setTimeout(function () {
      _event.outerHTML = '';
    }, 500);
  }
}
