function guardarTarea() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const sexo = document.getElementById("sexo").value;

  if (nombre === "" || edad === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const tareaCard = document.createElement("div");
  tareaCard.classList.add("tarea-card");
  tareaCard.innerHTML = `
       <div class="card">
  <div class="container">
    <div class="cloud front">
      <span class="left-front"></span>
      <span class="right-front"></span>
    </div>
    <span class="sun sunshine"></span>
    <span class="sun"></span>
    <div class="cloud back">
      <span class="left-back"></span>
      <span class="right-back"></span>
    </div>
  </div>

  <div class="card-header">
    <span>${nombre}</span>
    <span>${sexo}</span>
  </div>

  <span class="temp">${edad}°</span>

  <div class="temp-scale">
    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f03333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></span>
  </div>
</div>
    `;

  document.getElementById("tareasContainer").appendChild(tareaCard);


  const notification = document.getElementById("notification");
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);


  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("sexo").value = "Masculino";
}

function borrarTarea(element) {
  const tareaCard = element.closest(".tarea-card");
  tareaCard.remove();
}
