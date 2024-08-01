import {Pencil} from "./grafite";
import {Lead} from "./grafite";

class Adapter {

    pencil: Pencil;
    Lead: Lead;

    constructor(thickness: number) {
        this.pencil = new Pencil(thickness);
    }

    insert(thickness: number, hardness: string, length: number) {
        this.Lead = new Lead(thickness, hardness, length);
        this.pencil.insert(this.Lead);
    }


    remove() {
        this.pencil.remove();
    }

    writePage() {
        this.pencil.writePage();
    }

    toString() {
        return this.pencil.toString();
    }
}

export {Adapter};
