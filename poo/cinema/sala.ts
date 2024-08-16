import { Cliente } from "./cliente";

class Sala {
    private cadeiras: (Cliente | null)[];

    constructor(capacidade: number) {
        this.cadeiras = new Array(capacidade).fill(null);
    }

    reservar(id: string, fone: string, ind: number): boolean {
        if(ind > this.cadeiras.length){
            console.log('fail: cadeira nao existe');
            return false;
        }
        
        if (this.cadeiras[ind] !== null) {
            console.log('fail: cadeira ja esta ocupada');
            return false;
        }
        
    let clienteExistente = this.cadeiras.find(cliente => cliente !== null && cliente.getId() === id);

    if (clienteExistente) {
        console.log('fail: cliente ja esta no cinema');
        return false;
    }

        
        
        this.cadeiras[ind] = new Cliente(id, fone);
        return true;
    }

    cancelar(id: string): void {
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (this.cadeiras[i] !== null && this.cadeiras[i]!.getId() === id) {
                this.cadeiras[i] = null;
                return;
            }
        }
        console.log('fail: cliente nao esta no cinema');
    }

    getCadeiras(): (Cliente | null)[] {
        return this.cadeiras;
    }

    toString(): string {
        return '[' + this.cadeiras.map((cliente) => (cliente ? cliente.toString() : "-")).join(" ") + ']';
    }
}

export { Sala };
