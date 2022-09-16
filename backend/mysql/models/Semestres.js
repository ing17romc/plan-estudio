import {
	find as _find,
	save as _save,
	findById as _findById,
	update as _update,
	deleteById as _deleteById
} from './Generic'

const SP_FIND_ONE = 'SELECT * FROM Semestres WHERE id = ?;'
const SP_CONSULT_ALL = 'SELECT * FROM Semestres;'
const SP_DELETE = 'DELETE FROM Semestres WHERE id = ?;'
const SP_INSERT = 'INSERT INTO Semestres (nombre, estado) VALUES (?,?);'
const SP_UPDATE = 'UPDATE Semestres SET nombre = ?, estado = ? WHERE id = ?;'

export const find = async () => await _find(SP_CONSULT_ALL)

export const save = async ({ nombre, estado }) =>
	await _save({ nombre, estado }, SP_INSERT)

export const findById = async (id) => await _findById(id, SP_FIND_ONE)

export const update = async ({ id, nombre, estado }) =>
	await _update({ id, nombre, estado }, SP_UPDATE)

export const deleteById = async (id) => await _deleteById(id, SP_DELETE)
