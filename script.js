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
  var input, table, tr, tdTitle, tdBody, tdTitleTxtValue, tdBodyTxtValue;
  input = document.getElementById("searchBar").value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    tdTitle = tr[i].getElementsByTagName("td")[2];
    tdBody = tr[i].getElementsByTagName("td")[3];
    if (tdTitle && tdBody) {
      tdTitleTxtValue = tdTitle.textContent || tdTitle.innerText;
      tdBodyTxtValue = tdBody.textContent || tdBody.innerText;
      if (tdTitleTxtValue.toUpperCase().indexOf(input) > -1 || tdBodyTxtValue.toUpperCase().indexOf(input) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}