fetch('https://jsonplaceholder.typicode.com/albums').then(
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
            temp += "<td>" + json.title + "</tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)