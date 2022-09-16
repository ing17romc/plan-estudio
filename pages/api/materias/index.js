import { CODE_HTTP } from 'constants/index'
import { find, save } from '../../../backend/mongodb/models/Materias'
import { get_all_generic, post_generic } from 'lib/apiGeneric'

const index = async (req, res) => {
	const { method, body } = req

	switch (method) {
	case 'GET':
		return get_all_generic(res, find)
	case 'POST':
		return post_generic(res, body, save)

	default:
		return res
			.status(CODE_HTTP._400)
			.json({ msg: 'This method is not supported' })
	}
}

export default index
