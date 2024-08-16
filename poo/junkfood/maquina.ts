import { Slot } from "./slot";

class Maquina {
    espirais: Slot[];
    saldo: number;
    lucro: number;

    constructor(capacidade: number = 0) {
        this.espirais = new Array(capacidade).fill(new Slot());
        this.saldo = 0;
        this.lucro = 0;
    }

    get(indice: number): Slot {
        if (indice < 0 || indice >= this.espirais.length) {
            return new Slot("fail: indice nao existe");
        }
        return this.espirais[indice];
    }

    set(indice: number, nome: string, qtd: number, preco: number): void {
        if (indice < 0 || indice >= this.espirais.length) {
            console.log("fail: indice nao existe");
            return;
        }
        this.espirais[indice] = new Slot(nome, qtd, preco);
    }

    limpar(indice: number): void {
        if (indice < 0 || indice >= this.espirais.length) {
            console.log("fail: indice nao existe");
            return;
        }
        this.espirais[indice] = new Slot();
    }

    inserirDinheiro(value: number): void {
        this.saldo += value;
    }

    pedirTroco(): number {
        const troco = this.saldo;
        this.saldo = 0;
        return troco;
    }

    comprar(indice: number): void {
        if (indice < 0 || indice >= this.espirais.length) {
            console.log("fail: indice nao existe");
            return;
        }

        const slot = this.espirais[indice];
        if (slot.nome === "empty") {
            console.log("fail: espiral sem produtos");
            return;
        }

        if (this.saldo < slot.preco) {
            console.log("fail: saldo insuficiente");
            return;
        }

        if (slot.qtd > 0) {
            slot.qtd--;
            this.saldo -= slot.preco;
            this.lucro += slot.preco;
            console.log(`voce comprou um ${slot.nome}`);
        } else {
            console.log(`fail: espiral sem produtos`);
        }
    }

    getSaldo(): number {
        return this.saldo;
    }

    toString(): string {
        const espiralStr = this.espirais.map((slot, index) => `${index} ${slot.toString()}`).join('\n');
        return `saldo: ${this.saldo.toFixed(2)}\n${espiralStr}`;
    }
}

export { Maquina };