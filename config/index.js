const BASE_URL = process.env.BASE_URL

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
