/* ======================================
    Decisões e repetições (condicionais)
   ====================================== */
const num: number = 15;

if(num > 15) {
    console.log('Numero é maior que 15');
} else if(num === 15) {
    console.log('Numero é igual a 15');
} else {
    console.log('Numero é menor que 15');
}

const typeUser = {
    admin: 'Voce é um administrador',
    student: 'Você é um estudante',
    viewer: 'Você pode visualizar'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser]);
}

validateUser('admin')
validateUser('student')
validateUser('viewer')