//Definindo as classes de um herói
class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
//Definindo o Método
    attack(){
        let attackType

        if(this.type === "guerreiro"){
            attackType = "espada"
        }

        else if(this.type === "mago"){
            attackType = "magia"
        }

        else if (this.type === "monge"){
            attackType = "artes marciais"
        }

        else if(this.type === "ninja"){
            attackType = "shuriken"
        }

        else{
            console.log("Invalid hero type.")
            return
        }

        return `O ${this.type} atacou usando ${attackType}`
    }
}
//nova instância
let typeHero = new hero("VG", 19, "guerreiro")

console.log(typeHero.attack())