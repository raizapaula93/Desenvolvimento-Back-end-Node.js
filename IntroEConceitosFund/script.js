alert("olá mundo")//função
//window ->objeto do js -> a tela do navegador
//confirm -> método do objetov window
//body -> domínio dos outros elemtnos em tela
//prompt - >o usuário digita algo pra mim

const n1 = prompt("Digite o primeiro número");
const n2 = prompt("Digite o segundo número");

const resultado = Number(n1) + Number(n2);//temq colocar number pq nativamente prompt é string

console.log(resultado);