let cadastroNome = prompt('Insira seu nome');
alert(`Seja bem vindo ${cadastroNome}`);

let nomeVinho = prompt('Insira o nome do vinho');
let tipoVinho = prompt('Insria o tipo do vinho \n-Tinto \n-Branco \n-Rose');
let safraVinho = prompt('Insira a safra do vinho (ano de produção)');
let quantidade = prompt('Insira a quantidade em estoque');

alert('cadastro de vinho realizado, confira as informações no console')

console.log("╔══════════════════════════════════════╗");
console.log("║   🍷  VINHARIA AGNELLO – ESTOQUE     ║");
console.log("╠══════════════════════════════════════╣");
console.log(`║  Nome      : ${nomeVinho}`);
console.log(`║  Tipo      : ${tipoVinho}`);
console.log(`║  Safra     : ${safraVinho}`);
console.log(`║  Estoque   : ${quantidade} unidade(s)`);
console.log("╚══════════════════════════════════════╝");