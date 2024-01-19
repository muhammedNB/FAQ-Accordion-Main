'use strict';


const buttons = document.querySelectorAll('.btn');
const contents=document.querySelectorAll('.content')
let isActive = true;
buttons.forEach((button) => button.addEventListener('click', function (e) {
  e.preventDefault();
  contents.forEach(content => {
    if(content != e.target.parentNode.nextElementSibling)
    content.classList.remove('active')})

  buttons.forEach(button => {
    if(button != e.target)
    button.classList.remove("clicked")
  })

  this.classList.toggle('clicked')
  this.parentNode.nextElementSibling.classList.toggle("active")

}
));


