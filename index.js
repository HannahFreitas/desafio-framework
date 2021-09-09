// index.js
module.exports = () => {
    const data = { users: [] }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
      data.users.push({ id: i, name: `user${i}` })
    }
    return data
  }

  fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/albums/')
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((response) => response.json())
  .then((json) => console.log(json));