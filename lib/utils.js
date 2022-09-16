
import { STATUS } from '../constants'

export const getStatus = (value) => (value ? STATUS[1].value : STATUS[0].value)
export const getGenericEntities = (list) => {
	const data = []
	list.forEach((row) =>
		data.push({
			id: row.id,
			nombre: row.nombre,
			estado: row.estado
		})
	)
	return data
}
