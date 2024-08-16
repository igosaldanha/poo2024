import { Pessoa } from "./pessoa";
import { Motoca } from "./motoca";

class Adapter {

    pessoa: Pessoa;
    motoca: Motoca;

    constructor(potencia: number) {
        this.motoca = new Motoca(potencia);
        this.pessoa = new Pessoa("", 0);
    }

    enter(name: string, age: number): void {
        this.pessoa = new Pessoa(name, age);
        this.motoca.inserir(this.pessoa);
    }

    leave(): string {
        return this.motoca.remover()?.toString() || "---";
    }

    honk(): string {
        return this.motoca.buzinar();
    }

    drive(time: number): void {
        this.motoca.drive(time);
    }

    buy(time: number): void {
        this.motoca.time += time;
    }
    
    toString(): string {
        return this.motoca.toString();
    }
}

export {Adapter};
