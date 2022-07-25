/*class Poligono{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    get area(){
        return this.#calcularArea()
    }

    #calcularArea(){
        return this.altura * this.largura
    }
}

let poligono = new Poligono(50, 60)
console.log(poligono)*/

/*const job = new Job()

job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)*/

/*class Veiculo{
    rodas = 4

    mover(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo{
    constructor(){
        super()
        this.rodas = 2
    }
}*/

/*class Atleta{

    peso
    categoria

    constructor(peso){
        this.peso = peso
    }

    definirCategoria(){
        if(this.peso <=50){
            this.categoria = 'infantil'
        }
        else if (this.peso <= 65){
            this.categoria = 'juvenil'
        }
        else{
            this.categoria = 'adulto'
        }
    }
}

class Lutador extends Atleta{
    constructor(peso){
        super(peso)
    }
    definirCategoria(){
        if(this.peso <=50){
            this.categoria = 'pluma'
        }
        else if (this.peso <=60) {
            this.categoria = 'leve'
        }
        else if (this.peso <=70){
            this.categoria = 'meio-leve'
        }
        else{
            this.categoria = 'pesado'
        }
    }
}*/

/*class Parafuso{
    constructor(){
        if(this.constructor === Parafuso)
        throw new Error ('Classe abstarta nao pode ser intanciada')
    }
    get tipo(){
        throw new Error ('Metodo "get tipo ()" precisar ser implementado')
    }
}

class Fenda extends Parafuso{
    constructor() {super()}

    get tipo(){
        return 'Fenda'
    }
}

class Philps extends Parafuso{
    constructor() {super()}
    get tipo(){
        return 'Philips'
    }
}

class Allen extends Parafuso{}

//new Parafuso()
let fenda = new Fenda()
let philips = new Philps()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo)*/
