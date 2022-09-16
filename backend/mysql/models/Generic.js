import {
	// excuteSP,
	excuteQuery
} from '../db'
import { getGenericEntities } from 'lib/utils'

export const find = async (SP) => {
	console.log(SP)
	try {
		// const data = await excuteSP(SP);
		const data = await excuteQuery({ query: SP })
		console.log(data)
		return getGenericEntities(data)
	} catch (error) {
		console.log(error)
		return []
	}
}

export const save = async ({ nombre, estado }, SP) => {
	console.log(SP)
	try {
		const result = await excuteQuery({
			query: SP,
			params: [nombre, estado]
		})
		return result && result.affectedRows === 1
	} catch (error) {
		console.log(error)
		return false
	}
}

export const findById = async (id, SP) => {
	console.log(SP)
	try {
		const data = await excuteQuery({ query: SP, params: [id] })
		if (data.length) {
			return {
				id: data[0].id,
				nombre: data[0].nombre,
				estado: data[0].estado
			}
		} else {
			return null
		}
	} catch (error) {
		console.log(error)
		return null
	}
}

export const update = async ({ id, nombre, estado }, SP) => {
	console.log(SP)
	try {
		const result = await excuteQuery({
			query: SP,
			params: [nombre, estado, id]
		})
		return result && result.affectedRows === 1
	} catch (error) {
		console.log(error)
		return false
	}
}

export const deleteById = async (id, SP) => {
	console.log(SP)
	try {
		const result = await excuteQuery({ query: SP, params: [id] })
		return result && result.affectedRows === 1
	} catch (error) {
		console.log(error)
		return false
	}
}
