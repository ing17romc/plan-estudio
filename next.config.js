// next.config.js

module.exports = {
	env: {
		MYSQL: {
			HOST: 'localhost',
			PORT: '3306',
			DATABASE: 'testDB',
			USER: 'admin',
			PASSWORD: 'Password123#@!'
		},
		FIREBASE: {
			HOST: '',
			PORT: '',
			DATABASE: '',
			USER: '',
			PASSWORD: ''
		},
		BASE_URL: 'http://localhost:3000',
		BACKEND: 'mysql'
	}
}
