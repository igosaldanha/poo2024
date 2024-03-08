let valor: number = 0;

//local              = valor
let frutas1: string[] = [];

let frutas2: Array<string> = new Array<string>();

let cafe: string[] = ["ovo", "calabresa", "cucuz"]

console.log(cafe[0]);
console.log(cafe[1]);
console.log(cafe[2]);
console.log(cafe);

cafe.push("frango");
console.log(cafe);
cafe.pop();
console.log(cafe);

// unshift - remove do começo
// shift - adiciona no começo
// push - Adicionar no final 
// pop - Remover do final
// splice - Remove ou insere em qualquer posição

// // Posicao, quantos_saem, quem_entra
// cafe.slice();


//for indexado
for (let i = 0; i < cafe.length; i++) {
    console.log(cafe[i])
}

// for range
for (let comida of cafe){
    console.log(comida)
}