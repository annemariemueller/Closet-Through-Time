var array = [];

function highlightImage(img) {
  img.style.border = "2px solid black";
  array.push(img);
}

/* STACK OVERFLOW */

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal
function openModal() {
  document.getElementById("myModal").style.visibility = "visible";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.visibility = "hidden";
  }
};
