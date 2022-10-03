const squares = document.querySelectorAll("div");

squares.forEach((square) => {
  square.addEventListener("click", clickOutcome);
});

function clickOutcome() {
  alert("success");
}
