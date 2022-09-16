function connection () {
	try {
		const mysql = require('mysql2')

		const config = {
			host: process.env.MYSQL.HOST,
			port: process.env.MYSQL.PORT,
			database: process.env.MYSQL.DATABASE,
			user: process.env.MYSQL.USER,
			password: process.env.MYSQL.PASSWORD
		}

		const pool = mysql.createPool(config)

		const promisePool = pool.promise()

		return promisePool
	} catch (error) {
		return console.log(`Could not connect - ${error}`)
	}
}

const pool = connection()

module.exports = {
	connection: async () => pool.getConnection(),
	execute: (...params) => pool.execute(...params),
	query: (...params) => pool.query(...params)
}
