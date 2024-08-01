import {Carro} from "./carro";

class Adapter {

    carro: Carro;

    constructor() {
        this.carro = new Carro();
    }

    enter(): void {
        this.carro.enter();
    }

    leave(): void {
        this.carro.leave();
    }

    fuel(gas: number): void {
        this.carro.fuel(gas);
    }

    drive(km: number): void {
        this.carro.drive(km);
    }

    toString(): string {
        return this.carro.toString();
    }

}
export {Adapter};

if (require.main === module) {
    console.log("Rodando a adapter...");
}
