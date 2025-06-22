<button onclick="toggleMode()">Toggle Mode</button>
<div id="box">Hello</div>

<script>
function toggleMode() {
  const box = document.getElementById("box");
  box.style.backgroundColor = box.style.backgroundColor === "black" ? "white" : "black";
  box.style.color = box.style.color === "white" ? "black" : "white";
}
</script>
