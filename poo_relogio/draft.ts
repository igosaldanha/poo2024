class Time {
    private hour: number;
    private minute: number;
    private second: number;

    constructor(hour: number, minute: number, second: number) {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;  
        this.setHour(hour);
        this.setMinute(minute);
        this.setSecond(second);

    }
    
    public setHour(hour: number): void {
        if (hour < 0 || hour > 23) {
            console.log("fail: hora invalida");
            return;
    }
        this.hour = hour;
}
    public setMinute(minute: number): void {
        if (minute < 0 || minute > 59) {
            console.log("fail: minuto invalido");
            return;
        }
        this.minute = minute;
    }

    public setSecond(second: number): void {
        if (second < 0 || second > 59) {
            console.log("fail: segundo invalido");
            return;
        }
        this.second = second;
    }

    public getHour(): number {
        return this.hour;
    }

   public getMinute(): number {
        return this.second;
    }

    public getSecond(): number {
        return this.second;
    }

    nextSecond(): void {
            this.second++;
        if (this.second > 59) {
            this.second = 0;
            this.minute++;
            if (this.minute > 59) {
                this.minute = 0;
                this.hour++;
                if (this.hour > 23) {
                    this.hour = 0;
                }
            }
        }
    }
    
    toString() {
        let p2 = (n: number) => ("" + n).padStart(2, "0");
        return p2(this.hour) + ":" + p2(this.minute) + ":" + p2(this.second);
    }
}

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

function main() {
    let time = new Time(0, 0, 0);

    while (true) {
        let line = input();
        write("$" + line);
        let args = line.split(" ");

        if (args[0] === "show") { 
            write(time.toString());
        }
        else if (args[0] === "init") {
            time = new Time(+args[1], +args[2], +args[3]);
        }
        else if (args[0] === "set") { 
            time.setHour(+args[1]);
            time.setMinute(+args[2]);
            time.setSecond(+args[3]);
        }
        else if (args[0] === "next") {
            time.nextSecond();
        }
        else if (args[0] === "end")   {
            break;
        }
        else {
            write("fail: comando invalido");
        }
    }
}

main()

