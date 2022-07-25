/*(const piloto = [
    'Senna',
    'Porost',
    'Schumacher',
    'Hamilton'
]
console.log(piloto[0])
console.log(piloto[3])
console.log(piloto.length)


for (let pilotos of piloto) {
    console.log(piloto)
}

piloto.push('Alonso')
console.log(piloto)

const senna = piloto.find((pilotos => pilotos === 'Senna'))
console.log(senna)

piloto.splice(1, 1)
console.log(piloto)*/

/*const students = [

    ['Allysom', 19, 'PR'],
    ['Nicoly', 10, 'SP'], 
    ['Mariana', 18, 'MG']]

console.log(students [0] [1]) */

/*class Stack {

    constructor(){
        this.data = [

        ]       
        this.top = -1
    }
    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }
    pop(){
        if(this.top < 0 ) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }
    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

const stack = new Stack()

stack.push('learning')
stack.push('data')
console.log(stack.push('structure'))

console.log(stack.peek())

stack.pop()
console.log(stack.pop())

console.log(stack.peek())*/



/*class Queue{

    constructor(){
        this.data = [

        ]
    }
    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }
    dequeue(){
        const item = this.data.shift()
        console.log(`${item} saiu da fila`)
    }
}

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Allysom')
fila.enqueue('Nicoly')
fila.dequeue()
fila.dequeue()
fila.dequeue()*/

