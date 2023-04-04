const listaContatos = document.getElementById('lista-contatos');
const formContato = document.getElementById('form-contato');

// Array para armazenar os contatos
const contatos = [
  { nome: "João", fone: "(11) 1111-1111" },
  { nome: "Maria", fone: "(22) 2222-2222" },
  { nome: "Pedro", fone: "(33) 3333-3333" }
];

// Função para exibir os contatos na lista
function exibirContatos() {
  listaContatos.innerHTML = '';

  for (let contato of contatos) {
    let li = document.createElement('li');
    li.innerText = `Nome: ${contato.nome} | Telefone: ${contato.fone}`;
    listaContatos.appendChild(li);
  }
}

// Função para adicionar um novo contato
function adicionarContato(event) {
  event.preventDefault();

  let nome = formContato.nome.value;
  let fone = formContato.telefone.value;

  let novoContato = {
    nome: nome,
    fone: fone
  };

  contatos.push(novoContato);

  exibirContatos();
  formContato.reset();
}

exibirContatos();
formContato.addEventListener('submit', adicionarContato);
