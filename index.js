class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(){
        
        let attackType;
        switch (this.type.toLowerCase()){
            case "guerreiro":
                attackType = "espada";
                break;
            case "mago":
                attackType = "magia";
                break;
            case "monge":
                attackType = "artes marciais";
                break;
            case "ninja":
                attackType = "shuriken";
                break;
            default:
                attackType = false;
        }
        if(!attackType){
            console.log(`O herói ${this.name} não é de um tipo conhecido.`)
        } else{
            console.log(`O herói ${this.type} ${this.name} atacou usando ${attackType}.`);
        }
    }
}

//Examples
let player1 = new hero("Tom", 30, "Guerreiro");
player1.attack();

let player2 = new hero("Adam", 25, "Monge");
player2.attack();

let player3 = new hero("Harry", 22, "Mago");
player3.attack();

let player4 = new hero("Anakin", 35, "Ninja");
player4.attack();

let player5 = new hero("Frank", 50, "Atirador");
player5.attack();