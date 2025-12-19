/*=======================================
    Objetos e interfaces
  =======================================*/

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'Daniel',
    idade: 43
}
const newPessoa: Pessoa = {
    nome: 'Isabella',
    idade: 11,
    profissao: 'Juiza'
}

console.log(pessoa, newPessoa);

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    newPessoa
]
console.log(arrayPessoa);

const arrNumber: number[] = [
    1, 2, 3
]
console.log(arrNumber);

const arrString: Array<string> = [
    'Daniel', 'Polliana', 'Isabella'
]

console.log(arrString);