let search = document.getElementById("searchh");
let btn = document.getElementById("knpf");
let navnms = document.querySelector("navnms");
let ul = document.getElementById("myMenu");

search.addEventListener("focus", () => {
  btn.style.backgroundColor = "#000";
  ul.style.display = "grid";
})

search.addEventListener("blur", () => {
  btn.style.backgroundColor = "#f83232";
  ul.style.display = "none";
})

function paste() {
    navigator.clipboard.readText()
    .then((clipText) => 
    (document.getElementById("searchh").value += clipText));
}


function searcgg() {
  var filter, li, a, i;
  filter = search.value.toUpperCase();
 
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

