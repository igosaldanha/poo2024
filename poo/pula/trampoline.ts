import { Kid } from "./Kid";

class Trampoline {
    private waiting: Kid[] = [];
    private playing: Kid[] = [];

    
    constructor() {
        
    }

    private static removeFromList(name: string, list: Kid[]): Kid | null {
        const index = list.findIndex(kid => kid.getName() === name);
        if (index !== -1) {
            return list.splice(index, 1)[0];
        }
        return null;
    }

    public enter(): void {
        if (this.waiting.length > 0) {
            const kid = this.waiting.pop();
            if (kid) {
                this.playing.unshift(kid);
                console.log(`$enter`);
            }
        }
    }

    public leave(): void {
        if (this.playing.length > 0) {
            const kid = this.playing.pop();
            if (kid) {
                this.waiting.unshift(kid);
                console.log(`$leave`);
            }
        }
    }

    public removeKid(name: string): Kid | null {
        let kid = Trampoline.removeFromList(name, this.playing);
        if (kid === null) {
            kid = Trampoline.removeFromList(name, this.waiting);
        }
        if (kid) {
            console.log(`$remove ${name}`);
        }
        return kid;
    }

    public toString(): string {
        return "[" + this.waiting.map(kid => kid.toString()).join(", ") + "]" + " => " + 
                "[" + this.playing.map(kid => kid.toString()).join(", ") + "]";
    }
}

export { Trampoline };
