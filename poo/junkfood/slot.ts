class Slot {
    nome: string;
    qtd: number;
    preco: number;

    constructor(nome: string = "empty", qtd: number = 0, preco: number = 0.0) {
        this.nome = nome;
        this.qtd = qtd;
        this.preco = preco;
    }

    toString(): string {
        return `[${this.nome.padStart(8)} :${this.qtd.toString().padStart(2)} U : ${this.preco.toFixed(2)} RS]`;
    }
}

export { Slot };