fetch('user.json')
  .then(response => {
    // console.log('resolved ', response)
    // const data = response.json()
    // console.log(data)
    return response.json()
  })
  .then(data => console.log(data))
  .catch(err => {
    console.log(err)        // get oss nästan bara network error
  })