const db = require('../knex/db')

class PersonDAO {
   async createPerson(name, email, password) {
        const [id] = await db('users').insert({
            name: name,
            email: email,
            password: password
        }).returning('id');

        return id;
    }

    async findPerson(email) {
        const [result] = await db('users').where({
            email: email
        }).select('id', 'password');
        return result;
    }
}

module.exports = new PersonDAO()
