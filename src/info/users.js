let arrUsers = [
    {
        id: 1,
        name: 'Franco',
        phoneNumber: '111',
        address: 'address1',
        email: 'franco@nothing.com',
        password: '111',
        login: false,
        admin: false
    },
    {
        id: 2,
        name: 'Admin',
        phoneNumber: null,
        address: null,
        email: 'admin@nothing.com',
        password: 'admin1',
        login: true,
        admin: true
    }
];

console.log("User info loaded");

module.exports = {arrUsers}