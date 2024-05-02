const form = document.getElementById("form-validar");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  let campoA = Number(document.getElementById("campoA").value);
  let campoB = Number(document.getElementById("campoB").value);
  let message = document.getElementById("message");

  if (campoB > campoA) {
    message.innerHTML = "Esse formulário é valido.";
    message.className = "success"; // Adicionando a class a tag P 
  } else {
    message.innerHTML = "Esse formulário não é valido. Tente novamente!";
    message.className = "error";
  }

  // Limpando os inputs
  document.getElementById("campoA").value = "";
  document.getElementById("campoB").value = "";
});