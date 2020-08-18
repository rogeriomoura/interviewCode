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

function filterTable() {
  var input, table, tr, td, tdTxtValue;
  input = document.getElementById("searchBar").value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++){
      if (td[j]) {
        tdTxtValue = td[j].textContent || td[j].innerText;
        if (tdTxtValue.toUpperCase().indexOf(input) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}