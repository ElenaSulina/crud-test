let users = [];
let currentId = 1;

module.exports = {
    getUsers: () => users,
    addUser: (user) => {
        user.id = currentId++;
        users.push(user);
    },
    updateUser: (id, updatedData) => {
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1){
            users[userIndex] = {...users[userIndex], ...updatedData};
            return users[userIndex];
        } else {
            return null;
        }
        
    },
    deleteUser: (id) => {
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1){
            users.splice(userIndex, 1)
            return true;
        } else {
            return false;
        }
    },
    getUserById: (id) => users.find(u => u.id === id)
};