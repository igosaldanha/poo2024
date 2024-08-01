class Calculadora {
    batteryMax: number;
    battery: number;
    display: number;

    constructor(batteryMax: number) {
        this.batteryMax = batteryMax;
        this.battery = 0;
        this.display = 0;
    }

    chargeBattery(value: number): void {
        this.battery += value;

        if(this.battery >= this.batteryMax){
            this.battery = this.batteryMax;
            return;
        }
    }

    useBattery(): boolean {

        if(this.battery <= 0){
            console.log("fail: bateria insuficiente");
            return false;
        }

        this.battery -= 1;
        return true;

    }


    sum(a: number, b: number): void { 

        if(this.useBattery() == true){
            this.display = a + b;
        }   

    }

    division(num: number, den: number): void {

        if(this.useBattery() == true){
            
            if(den == 0){
                console.log("fail: divisao por zero");   
                return;
            }
            this.display = (num/den)
        }

    }

    toString(): string {
        return "display = " + this.display.toFixed(2) + ", battery = " + this.battery;
    }
}

export {Calculadora};