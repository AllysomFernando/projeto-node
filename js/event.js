/*const { EventEmitter }= require('events')

const ev = new EventEmitter()

ev.once('saySomething', (message) => {
    console.log(message, 'Estou te ouvindo' )
})

ev.on('saySomething', (message) => {
    console.log(message, 'Estou te ouvindo' )
})

ev.emit('saySomething', "Mensagem: ")*/


const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name

}

inherits(Character, EventEmitter)


const person = new Character ('Allysom')
person.on('Help', () => console.log(`Eu sou o ${person.name}, Tudo bem??`))


console.log('Olá, tudo bem? qual é o seu nome?')
person.emit('Help')



