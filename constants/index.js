import { CONFIG } from 'config'
import { CONTENT } from 'content'

const { CARRERAS, MATERIAS, SEMESTRES, START_APP, EXIT_APP } = CONFIG.ROUTER
const { GENERIC } = CONTENT

export const TABLE_HEADERS = [GENERIC.ID, GENERIC.NAME, GENERIC.STATUS.NAME]

export const STATUS = [
	{ key: '0', value: GENERIC.STATUS.INACTIVE },
	{ key: '1', value: GENERIC.STATUS.ACTIVE }
]

export const LEFT_OPTIONS = [{ path: START_APP, name: GENERIC.MENU }]
export const RIGHT_OPTIONS = [{ path: EXIT_APP, name: GENERIC.EXIT }]

export const MENU_OPTIONS = [
	{ path: CARRERAS, name: CONTENT.CARRERAS.TITLE, icon: 'list' },
	{ path: MATERIAS, name: CONTENT.MATERIAS.TITLE, icon: 'list' },
	{ path: SEMESTRES, name: CONTENT.SEMESTRES.TITLE, icon: 'list' }
]

export const BASE_URL = process.env.BASE_URL

export const CODE_HTTP = {
	_200: 200,
	_201: 201,
	_400: 400,
	_404: 404,
	_500: 500
}
