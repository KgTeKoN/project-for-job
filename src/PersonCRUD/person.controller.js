const personDAO = require('./dao')

class PersonController {
    async createPerson(name, email, password) {
        try {
            const result = await personDAO.createPerson(name, email, password)
            return result
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new PersonController();
