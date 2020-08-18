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
  console.log(`------INSIDE filterTable!`);
  var input, table, tr, td, tdTxtValue;
  input = document.getElementById("searchBar").value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      tdTxtValue = td.textContent || td.innerText;
      if (tdTxtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}