const db = require('../config/database')

class HousesController {
    static index(req, res) {

        const query = `
        SELECT *
        FROM HousesList
        INNER JOIN users
        ON HousesList.user_id = users.id
        `
        db.query(query, (err, rows, field) => {
            if (err) {
                throw err
            }

            return res.render('houses', {
                list: rows
            })
        })
    }

}

module.exports = HousesController;