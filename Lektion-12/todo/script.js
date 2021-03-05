const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');

let todos = [];

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
      todos = data;
      console.log(todos);
      listTodos();
    })
}
fetchTodos();


const listTodos = () => {
  output.innerHTML = '';
  todos.forEach(todo => {
    newTodo(todo);
  })
}

const newTodo = (todo) => {

  let card = document.createElement('div');
  card.classList.add('card', 'p-3', 'my-2');

  let innerCard = document.createElement('div');
  innerCard.classList.add('d-flex', 'justify-content-between', 'align-items-center');

  let title = document.createElement('h3');
  title.innerText = todo.title;

  let button = document.createElement('button');
  button.classList.add('btn', 'btn-danger');
  button.innerText = 'X';
  button.addEventListener('click', () => {
    console.log(todo.id)
  })

  innerCard.appendChild(title);
  innerCard.appendChild(button);
  card.appendChild(innerCard);
  output.appendChild(card);

}