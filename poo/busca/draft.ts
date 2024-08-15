

// existe determinado valor na fila?
function inside(vet: number[], value: number): boolean {

    for (let element of vet){
        if(element == value)
        return true;
    };

    return false 
    
}

// qual posição aparece X na fila pela primeira vez?
function index_of(vet: number[], value: number): number {

    for (let i = 0; i < vet.length; i++) {
        
        if(vet[i] == value){
            return i;
        }
        
    }

    return -1;



}

// qual a posição do primeiro valor positivo da fila?
function find_if(vet: number[]): number {

    for (let i = 0; i < vet.length; i++) {
        
        if(vet[i] > 0){
            return i;
        }
        
    }

    return -1;
}

// qual a posição do menor valor da lista?
function min_element(vet: number[]): number {

    if (vet.length == 0){
        return -1;
    }

    let pos_menor = 0;

    for(let i = 1; i < vet.length; i++){

        if (vet[i] < vet[pos_menor]){
            pos_menor = i;
        }
    }

    return pos_menor;
}

// qual a posição do menor valor positivo?
function find_min_if(vet: number[]): number {

    if (vet.length == 0){
        return -1;
    }

    let pos_menor_positivo = 0;

    for(let i = 1; i < vet.length; i++){

        if (vet[i] < vet[pos_menor_positivo] && vet[i] > 0){
            pos_menor_positivo = i;
        } 
    }

    return pos_menor_positivo;

}



// -------------------------- MAIN --------------------------

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

function main() {
    while (true) {
        let line = input();
        write("$" + line);
        let args = line.split(" ");

        if (args[0] === "end")   { 
            break;
        }
        else if (args[0] === "in"){
            let result = inside(to_vet(args[1]), +args[2]);
            write(result ? "true" : "false");
        }
        else if (args[0] === "index_of"){
            let result = index_of(to_vet(args[1]), +args[2]);
            write(result);
        }
        else if (args[0] === "find_if"){
            let result = find_if(to_vet(args[1]));
            write(result);
        }
        else if (args[0] === "min_element"){
            let result = min_element(to_vet(args[1]));
            write(result);
        }
        else if (args[0] === "find_min_if"){
            let result = find_min_if(to_vet(args[1]));
            write(result);
        }
        else {
            write("fail: Comando inválido");
        }
    }
}

main();



// Função auxiliar para converter de string para vetor
// "[1,2,3,4]" para [1, 2, 3, 4]
function to_vet(token: string): number[] {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}
