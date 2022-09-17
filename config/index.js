const DEV = process.env.NODE_ENV !== 'production'
const DEV_URL = process.env.DEV_URL
const PROD_URL = process.env.PROD_URL

const BASE_URL = DEV ? DEV_URL : PROD_URL

export const CONFIG = {
	ROUTER: {
		CREAR: '/Crear',
		CARRERAS: '/Carreras',
		MATERIAS: '/Materias',
		SEMESTRES: '/Semestres'
	},
	API: {
		CARRERAS: `${BASE_URL}/api/carreras`,
		MATERIAS: `${BASE_URL}/api/materias`,
		SEMESTRES: `${BASE_URL}/api/semestres`
	}
}
