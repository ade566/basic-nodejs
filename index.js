const hero = require('superheroes')
const say = require('./module/say')

const nameHero = hero.random()
console.log(nameHero)

const sayHello = say.hello('Muhamad Ade Rohayat')
console.log(sayHello)