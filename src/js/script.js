let cadastroNome = prompt('👤 Cadastro pessoal\n\nInsira seu nome...');
alert(`Seja bem vindo(a), ${cadastroNome}!`);

let nomeVinho = prompt('🍷 Cadastro de vinho\n\nInsira o nome do vinho:');
let tipoVinho = prompt('🍷 Cadastro de vinho\n\nInsria o tipo: \n-Tinto \n-Branco \n-Rose');
let safraVinho = prompt('🍷 Cadastro de vinho\n\nInsira a safra (ano de produção):');
let quantidade = prompt('🍷 Cadastro de vinho\n\nInsira a quantidade em estoque:');

alert('Cadastro de vinho realizado com SUCESSO! Confira as informações no console.')

console.log("╔══════════════════════════════════════╗");
console.log("║   🍷  VINHARIA AGNELLO – ESTOQUE     ║");
console.log(`║ - Registrado por: ${cadastroNome}`);
console.log("╠══════════════════════════════════════╣");
console.log(`║  Nome      : ${nomeVinho}`);
console.log(`║  Tipo      : ${tipoVinho}`);
console.log(`║  Safra     : ${safraVinho}`);
console.log(`║  Estoque   : ${quantidade} unidade(s)`);
console.log("╚══════════════════════════════════════╝");