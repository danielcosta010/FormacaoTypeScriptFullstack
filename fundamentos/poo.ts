class User {
    name: string
    age: number

    constructor(name: string, age: number) {
       this.name = name
       this.age = age
    }

    showName = () => {
        console.log(this.name, this.age)
    }
}

const user = new User('Daniel', 43)
console.log(user.name, user.age);


const otherUser = new User('Isabella', 11)

user.showName()
otherUser.showName()



