fetch('https://jsonplaceholder.typicode.com/todos').then(
  res => {
    res.json()
    .then(
      (json) => {
        console.log(json);
        if (json.length > 0) {

            var temp = "";
            json.forEach((json) => {
            temp += "<tr>";
            temp += "<td>" + json.userId + "</td>";
            temp += "<td>" + json.id + "</td>";
            temp += "<td>" + json.title + "</td>";
            temp += "<td>" + json.completed + "</tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)