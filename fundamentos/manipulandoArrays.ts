const arrayNumber: Array<number> = [1, 2, 3, 4, 5];

let buscaNum = arrayNumber.find(num => num > 2)
console.log('========Método find()============');

console.log(buscaNum);

console.log('==========Método forEach()============');

arrayNumber.forEach(num => {
    if(num > 2 && num % 2 === 0) {
        console.log(num * 2);   
    }
});

console.log('=========Método map()=============');

arrayNumber.map(num => console.log(num))
