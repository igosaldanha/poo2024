class Cliente{

    private nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    toString(): string{
        return this.nome;
    }

    getNome(): string{
        return this.nome;
    }

    setNome(nome: string): void{
        this.nome = nome;
    }

}

export {Cliente};