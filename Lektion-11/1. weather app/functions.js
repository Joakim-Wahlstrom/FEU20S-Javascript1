const apiKey = 'din egna api nyckel'
export const getData = async (input) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`

  const res = await fetch(url)
  const data = await res.json()

  return data;
}

export const buildDate = d => {

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}