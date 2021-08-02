let arrayUser = [];

class Users {
    constructor(id, name, email, password, address, admin, login){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.admin = admin;
        this.login = login;
    }
}

let user1 = new Users ( 1, 'Franco', 'franco@nothing.com', '123', 'address1', false, false);
let user2 = new Users ( 2, 'Lucas', 'lucas@nothing.com', '1234', 'address2', false, false);
let admin = new Users ( 3, 'admin', 'admin@nothing.com', '12345', 'address3', true, false);

arrayUser = [user1, user2, admin];
console.log('Information users successfully loaded');

module.exports = { arrayUser }
