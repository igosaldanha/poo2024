class Animal {
    especie: string;
    barulho: string;
    estagio: number;

    constructor(especie: string, barulho: string) {
        this.especie = especie;
        this.barulho = barulho;
        this.estagio = 0;
    }

    fazerBarulho(): string {
      if(this.estagio === 0){
          return `---`;
      } else if (this.estagio >= 4){
          return `RIP`;
      } else {
        return this.barulho;
      }
    }

    envelhecer(nivel: number): void {
     if(this.estagio + nivel >= 4){
        console.log(`warning: ${this.especie} morreu`);
        this.estagio = 4;
     } else {
         this.estagio += nivel;
     }
    }

    toString(): string {
        return `${this.especie}:${this.estagio}:${this.barulho}`;
    }
}

export {Animal};