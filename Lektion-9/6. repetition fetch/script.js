const btn = document.querySelector('#btn');
const textOutput = document.querySelector('#text-output');
const jsonBtn = document.querySelector('#btn2');
const jsonOutput = document.querySelector('#json-output');

let posts = []

const getJson = () => {

  fetch('json.json')
    .then(res => res.json())
    .then(data => {
      posts = data;
      // console.log(posts);

      jsonOutput.innerHTML = ''
      posts.forEach(post => {
        jsonOutput.innerHTML += `
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">${post.title}</h3>
            <p class="card-text">${post.body}</p>
          </div>
        </div>
        `
      })

    })

}








jsonBtn.addEventListener('click', getJson);







btn.addEventListener('click', function() {

  fetch('text.txt')
  .then(function(res) {
    return res.text();
  })
  .then(function(data) {
    textOutput.innerText = data;
  })

})