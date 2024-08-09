import { Cliente } from "./cliente";
import { Mercantil } from "./mercantil";

class Adapter {
    cliente: Cliente;
    mercantil: Mercantil;

    constructor(nCaixas: number) {
        this.mercantil = new Mercantil(nCaixas);
        this.cliente = new Cliente("");

    }

    arrive(nome: string): void {
        this.cliente = new Cliente(nome);
        this.mercantil.chegar(this.cliente);
    }

    call(index: number): void {
        this.mercantil.chamar(index);
    }

    finish(index: number): void {
        this.mercantil.finalizar(index);
    }

    show(): string {
        return this.mercantil.toString();
    }
}

export { Adapter };