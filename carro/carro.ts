
class Carro{

    pass: number; // Passageiros
    passMax: number; // limite de Passageiros
    gas: number; // tanque
    gasMax: number; // limite do tanque
    km: number; // quantidade de quilometragem

    constructor() {

        this.pass = 0;
        this.passMax = 2;
        this.gas = 0;
        this.gasMax = 100;
        this.km = 0;
    }

    enter(): void {

        if(this.pass == this.passMax){
            console.log("fail: limite de pessoas atingido");
            return;   
        }

        this.pass += 1;

    }

    leave(): void {

        if(this.pass == 0){
            console.log("fail: nao ha ninguem no carro");
            return;
        }

        this.pass -= 1;
    }

    fuel(gas: number): void {


        if((this.gas + gas) >= this.gasMax){

            this.gas = this.gasMax;
            return;
        }

        this.gas += gas;

    }

    drive(km: number): void {

        if(this.pass == 0){
            console.log("fail: nao ha ninguem no carro");
            return;

        }

        if(this.gas == 0){

            console.log("fail: tanque vazio");
            return;

        } 
        
        if(km >= this.gas) {

            console.log(`fail: tanque vazio apos andar ${this.gas} km`);
            this.km += this.gas;
            this.gas = 0;
            
            return;

        }
         
        this.gas -= km;
        this.km += km;        

    }
    
    toString(): string {

    return `pass: ${this.pass}, gas: ${this.gas}, km: ${this.km}`;

    }
    
};

export { Carro };
