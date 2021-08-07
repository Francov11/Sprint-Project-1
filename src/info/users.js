let arrayUser = [];

class Users {
    constructor(id, name, email, password, address, admin, phoneNumber){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.admin = admin;
    }
}

let user1 = new Users (1, 'Franco', 'franco@nothing.com', '123', '1111', 'address1', false);
let user2 = new Users (2, 'Lucas', 'lucas@nothing.com', '1234', '2222', 'address2', false);
let admin = new Users (3, 'admin', 'admin@nothing.com', '12345', null, 'address3', true);

arrayUser = [user1, user2, admin];
console.log('Information users successfully loaded');

module.exports = { arrayUser }
