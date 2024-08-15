class Kid {
    private age: number;
    private name: string;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public getName(): string {
        return this.name;
    }

    public toString(): string {
        return this.name + ":" + this.age.toString();
    }
}

export { Kid };
