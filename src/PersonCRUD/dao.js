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
}

module.exports = new PersonDAO()
