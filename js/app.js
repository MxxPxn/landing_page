'use strict';

const app = document.querySelector('.todo-app');
const list = app.querySelector('.todo-app__list');
const form = app.querySelector('.todo-app__form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const item = document.createElement('li');

    item.textContent = form.elements.todo.value;

    item.addEventListener('dblclick', () => {
    item.remove();
    });
    list.prepend(item);

     form.reset();
});