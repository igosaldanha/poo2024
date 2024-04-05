import {Pessoa} from "./pessoa"
import {Budega} from "./budega"

class Adapter {

    budega: Budega;

    constructor() {
    }
    init(nCaixas: number): void {
        this.budega = new Budega(nCaixas);
    }
    arrive(nome: string): void {
        this.budega.chegar(new Pessoa(nome));
    }
    call(index: number): void {
        this.budega.chamar(index);
    }
    finish(index: number): void {
        this.budega.finalizar(index);
    }
    show(): string {
        return this.budega.toString();

    }
}

export { Adapter };