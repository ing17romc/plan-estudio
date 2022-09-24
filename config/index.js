const DEV = process.env.NODE_ENV !== 'production'
const DEV_URL = process.env.DEV_URL
const PROD_URL = process.env.PROD_URL

const BASE_URL = DEV ? DEV_URL : PROD_URL

export const CONFIG = {
	ROUTER: {
		START_APP: '/',
		EXIT_APP: '/Salir',
		CREAR: '/Crear',
		CARRERAS: '/Carreras',
		MATERIAS: '/Materias',
		SEMESTRES: '/Semestres',
		USUARIOS: {
			USER: '/Auth/User',
			LOGIN: '/Auth/Login',
			REGISTER: '/Auth/Register',
			RESET_PASSWORD: '/Auth/Login'
		}
	},
	API: {
		CARRERAS: `${BASE_URL}/api/carreras`,
		MATERIAS: `${BASE_URL}/api/materias`,
		SEMESTRES: `${BASE_URL}/api/semestres`
	}
}
