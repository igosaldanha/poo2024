import { Maquina } from "./maquina";
import { Slot } from "./slot";

class Adapter {
    maq: Maquina;
    slots: Slot[];

    constructor(qtd: number) {
        this.maq = new Maquina(qtd);
        this.slots = new Array(qtd).fill(new Slot());
    }

    setSlot(indice: number, name: string, qtd: number, price: number): void {
        this.maq.set(indice, name, qtd, price);
        this.slots[indice] = new Slot(name, qtd, price);
    }

    limpar(indice: number): void {
        this.maq.limpar(indice);
        this.slots[indice] = new Slot();
    }
    
    inserirDinheiro(value: number): void {
        this.maq.inserirDinheiro(value);
    }

    pedirTroco(): number {
        return this.maq.pedirTroco();
    }

    comprar(ind: number): void {
        this.maq.comprar(ind);
    }

    toString(): string {
        let str = "";
        for (let i = 0; i < this.slots.length; i++) {
            str += `${i} ${this.slots[i]}\n`;
        }
        return str;
    }

}

export {Adapter};