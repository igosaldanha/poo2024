import { Cliente } from "./cliente";

class Mercantil {
    private caixas: (Cliente | null)[];
    private filaEspera: Cliente[];

    constructor(quantidadeCaixas: number) {
        this.caixas = Array(quantidadeCaixas).fill(null);
        this.filaEspera = [];
    }

    public toString(): string {
        const caixasString = this.caixas.map(cliente => cliente === null ? "-----" : cliente.toString()).join(", ");
        const esperaString = this.filaEspera.map(cliente => cliente.toString()).join(", ");

        return `Caixas: [${caixasString}]\nEspera: [${esperaString}]`;
    }

    // Parte 3: Método Chegar
    public chegar(pessoa: Cliente): void {
        this.filaEspera.push(pessoa);
    }

    // Parte 4: Método Chamar
    public chamar(index: number): void {
        if (index < 0 || index >= this.caixas.length) {
            console.log("fail: caixa inexistente");
            return;
        }
        if (this.caixas[index] !== null) {
            console.log("fail: caixa ocupado");
            return;
        }
        if (this.filaEspera.length === 0) {
            console.log("fail: sem clientes");
            return;
        }

        this.caixas[index] = this.filaEspera.shift()!;
    }

    // Parte 5: Método Finalizar Atendimento
    public finalizar(index: number): Cliente | null {
        if (index < 0 || index >= this.caixas.length) {
            console.log("fail: caixa inexistente");
            return null;
        }
        if (this.caixas[index] === null) {
            console.log("fail: caixa vazio");
            return null;
        }

        const cliente = this.caixas[index]!;
        this.caixas[index] = null;
        return cliente;
    }
}

export { Mercantil };
