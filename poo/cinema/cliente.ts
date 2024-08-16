class Cliente {
    private id: string;
    private fone: string;

    constructor(id: string, fone: string) {
        this.id = id;
        this.fone = fone;
    }

    toString(): string {
        return `${this.id}:${this.fone}`;
    }

    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getFone(): string {
        return this.fone;
    }

    setFone(fone: string): void {
        this.fone = fone;
    }
}

export { Cliente };