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

    async updatePerson(id, data, column) {
        const [resultId] = await db('users')
            .where('id', id)
            .update(column, data)
            .returning('id');

        return resultId;
    }
}

module.exports = new PersonDAO()
