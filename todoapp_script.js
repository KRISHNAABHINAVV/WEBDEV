<input id="taskInput" type="text" placeholder="New Task">
<button onclick="addTask()">Add Task</button>
<ul id="taskList"></ul>

<script>
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("taskList").appendChild(li);
    input.value = ""; // Clear input
  }
}
</script>
