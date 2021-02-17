/* 
  GET
  POST
  PUT
  PATCH
  DELETE

*/


const getRequest = (url, cb) => {
  const http = new XMLHttpRequest();

  http.addEventListener('readystatechange', () => {
    // console.log(http);
  
    if(http.readyState === 4 && http.status === 200) {
      // console.log(http.responseText);
      const data = JSON.parse(http.responseText);
      cb(undefined, data);
    } 
    else if (http.readyState === 4) {
      // console.log('404 could not fetch data');
      cb('404 could not fetch data', undefined)
    }
  
  })
  
  http.open('GET', url);
  http.send();
}

console.log(1);
console.log(2);
getRequest('user.json', (err, data) => {
  if(err) {
    console.log(err)
  } 
  else {
    // console.log(JSON.parse(data));           //Konvertera från json till js
    // console.log(JSON.stringify(data));       //Konvertera till json från js
    console.log(data)
  }
})
console.log(3);
console.log(4);