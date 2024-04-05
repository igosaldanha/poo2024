import {Pessoa} from "./pessoa.ts"
import {Budega} from "./budega.ts"

class Adapter {

    pessoa: Pessoa;
    budega: Budega;

    constructor() {
    }
    init(nCaixas: number): void {
        this.budega = new Budega(nCaixas);
    }
    arrive(nome: string): void {
        this.pessoa.setNome(nome);
        this.budega.chegar(this.pessoa);
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