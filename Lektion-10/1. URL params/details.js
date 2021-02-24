const output = document.querySelector('#output');
// console.log(window.location);
// const params = new URLSearchParams(window.location.search)
// const id = params.get('id');
// console.log(id);
const id = new URLSearchParams(window.location.search).get('id');

const getPost = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/' + id;

  const res = await fetch(url);
  const post = await res.json();

  output.innerHTML = `
  <div class="card p-3 mt-5">
    <div class="text-center mb-4">
      <h3>${post.title}</h3>
    </div>
      <p>${post.body}</p>
  </div>
  `
}

window.addEventListener('DOMContentLoaded', () => {
  getPost();
})