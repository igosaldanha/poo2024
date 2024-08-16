import { Kid } from "./kid";

class Trampoline {
    private waiting: Kid[] = [];
    private playing: Kid[] = [];

    private removeFromList(name: string, list: Kid[]): Kid | null {
        let index = list.findIndex((kid) => kid.getName() === name);
        if (index === -1) {
            return null;
        }

        let kid = list.splice(index, 1)[0];
        return kid;
    }

    arrive(kid: Kid): void {
        this.waiting.unshift(kid);
    }

    enter(): void {
        if(this.waiting.length > 0) {
            let aux1 = this.waiting.pop()
            this.playing.unshift(aux1);
        }
    }

    leave(): void {
        if(this.playing.length > 0){
            let aux2 = this.playing.pop()
            this.waiting.unshift(aux2);
        }
    }

    removeKid(name: string): Kid | null {
         if(this.waiting.length < 0) {
            return null
        }
        let kid = this.removeFromList(name, this.waiting) || this.removeFromList(name, this.playing);
        return kid;
    }

    toString(): string {return "[" + this.waiting.join(", ") + "]" + " =>" + " [" + this.playing.join(", ") + "]";
    }
}

export { Trampoline };
