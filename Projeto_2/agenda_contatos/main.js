const form = document.getElementById("form-agenda");
const totalContatos = document.getElementById("total-contatos");
const total = [];

let linhas = "";
form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionarContato();
  atualizarAgenda();
});

function adicionarContato() {
  const inputNome = document.getElementById("nome-contato");
  const inputNumero = document.getElementById("numero-contato");

 if (total.includes(inputNumero.value)) {
      alert(`O Numero: ${inputNumero.value} já existe!`);
  } else {

  total.push(Number(inputNome.value));

  let linha = "<tr>";
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputNumero.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  //Limpa após cadastrar o contato
  inputNome.value = "";
  inputNumero.value = "";
}

//Atualiza a lista, adicionando os contatos que são adicionados e o total de contatos adicionados
function atualizarAgenda() {
  const listaAgenda = document.querySelector("tbody");
  listaAgenda.innerHTML = linhas;
  totalContatos.innerHTML = total.length;
}

// Criando mascara para o telefone
function mascaraContato(telefone) {
  const inputContato = telefone.value; // Obtando o valor do input do usuario
  const nCelular = inputContato.length === 11; // Verificando se o número é um celular contando com o DDD

  // Verificando se o número digitado é um celular, caso contrario vai para o else e será formatado como tel fixo
  let numeroFormat;
  if (nCelular) {
    // Aqui irá formar no número para tel celular
    const ddd = inputContato.slice(0, 2);
    const p1 = inputContato.slice(2, 7);
    const p2 = inputContato.slice(7, 11);
    numeroFormat = `(${ddd}) ${p1}-${p2}`;
  } else {
    // Aqui irá formar no número para tel fixo
    const ddd = inputContato.slice(0, 2);
    const p1 = inputContato.slice(2, 6);
    const p2 = inputContato.slice(6, 10);
    numeroFormat = `(${ddd}) ${p1}-${p2}`;
  }
  telefone.value = numeroFormat;
}

// Função para remover o hífen do numero caso o usuario digite
function tiraHifen(telefone) {
  const inputContato = telefone.value;
  const numeroFormat = inputContato.replace(/\-/g, "");

  telefone.value = numeroFormat;
}
