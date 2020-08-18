const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then(response => response.json())  
.then(data => {
  appendData(data);
})
.catch((err) => console.log(err));

function appendData(data) {
  var mainContainer = document.getElementById("table");
  for (var i = 0; i < data.length; i++) {
    var tr = document.createElement("tr");
    tr.innerHTML = '<td>' + 
    data[i].id + '</td><td>' + 
    data[i].userId + '</td><td>' + 
    data[i].title + '</td><td>' + 
    data[i].body + '</td>';
    mainContainer.appendChild(tr);
  }
}