1. let aluno = {
  nome: "Larissa Feitosa",
  idade: 17,
  curso: "Informática"
};

console.log("Nome " + aluno.nome);
console.log("Idade: " + aluno.idade);
console.log("Curso: " + aluno.curso);

2. let carro = {
  marca: "Ford",
  modelo: "Fastback GT",
  ano: 1967
};

console.log("Marca: " + carro.marca);

3. let livro = {
  título: "O Alienista",
  autor: "Machado de Assis",
  anoPublicação: 1882
};

console.log("Título: " + livro.título);
console.log("Autor: " + livro.autor);

4. let produto = {
  nome: "Mustang GTD",
  preço: 16000000,
  quantidade: 10
};

let valorTotal = produto.preco * produto.quantidade;

console.log("Valor Total: R$" + valorTotal);

5. let meuNome = "Emily Ohana da Silva Soares"

console.log("Número de caracteres: " + meuNome.length);

6. function mostraPrimeiroUltimoNome(nomeCompleto) {

  let partes = nomeCompleto.split(" ");

  let primeiro = partes[0];
  let ultimo = partes[partes.length - 1];

  console.log("Primeiro Nome: " + primeiro);
  console.log("Último Nome: " + ultimo);
}

mostraPrimeiroUltimoNome("Emily Ohana da Silva Soares")

7. function mostraPrimeiroNome(nomeCompleto) {

  let partes = nomeCompleto.split(" ");
  let primeiro = partes[0];

  console.log("Primeiro Nome: " + primeiro);
}

mostraPrimeiroNome("Emily Ohana da Silva Soares")

8. let frase = "Tudo é um processo."

console.log(frase.toUpperCase());

9. 

13.  // Cria um array vazio para armazenar os filmes
let filmes = [];

// Pede ao usuário o nome de 5 filmes
for (let i = 0; i < 5; i++) {
  let nomeFilme = prompt(`Digite o nome do ${i + 1}º filme:`);
  filmes.push(nomeFilme);
}

// Exibe no console os filmes informados
console.log("Os filmes informados foram:");
for (let filme of filmes) {
  console.log(filme);
}

14. // Cria um array vazio para armazenar os filmes
let filmes = [];

// Pede ao usuário o nome de 5 filmes
for (let i = 0; i < 5; i++) {
  let nomeFilme = prompt(`Digite o nome do ${i + 1}º filme:`);
  filmes.push(nomeFilme);
}

// Exibe os filmes informados usando um for tradicional
console.log("Os filmes informados foram:");
for (let i = 0; i < filmes.length; i++) {
  console.log(filmes[i]);
}

15. // Lista de filmes do exercício anterior
let filmes = [];

// Solicita ao usuário o nome de 5 filmes
for (let i = 0; i < 5; i++) {
  let nomeFilme = prompt(`Digite o nome do ${i + 1}º filme:`);
  filmes.push(nomeFilme);
}

// Exibe no console cada um dos filmes informados usando for...of
console.log("Os filmes informados foram:");
for (let filme of filmes) {
  console.log(filme);
}




























