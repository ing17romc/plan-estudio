import { CONFIG } from '../config'

const { CARRERAS, MATERIAS, SEMESTRES } = CONFIG.ROUTER

export const TABLE_HEADERS = ['Id', 'Nombre', 'Estado']

export const STATUS = [
	{ key: '0', value: 'Inactivo' },
	{ key: '1', value: 'Activo' }
]

export const LEFT_OPTIONS = [{ path: '/', name: 'Menu' }]
export const RIGHT_OPTIONS = []

export const MENU_OPTIONS = [
	{ path: CARRERAS, name: 'Carreras', icon: 'list' },
	{ path: MATERIAS, name: 'Materias', icon: 'list' },
	{ path: SEMESTRES, name: 'Semestres', icon: 'list' }
]

export const BASE_URL = process.env.BASE_URL

export const CODE_HTTP = {
	_200: 200,
	_201: 201,
	_400: 400,
	_404: 404,
	_500: 500
}
