let nota: number = 10;

console.log(`Vamos todos tirar ${nota}`);

//erros
let batata: undefined = undefined;

// Retorna vazio
function imprimirNumero(valor: number): void{
    console.log(valor);
}

// Qualquer coisa
let mungango: any = 5;
mungango = "eita plaeura";
mungango = false;

// Sintax de união de tipo
let numero: number | string = 0;

// Tipo explicito
let namorada: string | null = null;

//
function procurarPretendente(): string[] | null {
    return null;
}

// Sybtatic sugar
let frutas: string[] = ["Bananas", "Uva", "Pessego"];
let animai: Array<string> = ["dog", "cat"];

// String com textos e numeros
let numeros: Array<string | number> = [1,2,3,"quatro"];

console.log(numeros);

// Comparação flexival
let x: number = 5;
