import Layaout from 'components/Layaout'
import GenericEdit from 'components/GenericEdit'
import { CONTENT } from 'content'
import { CONFIG } from 'config'
import Error from 'next/error'

const { TITLE_EDIT } = CONTENT.MATERIAS
const { MATERIAS: API } = CONFIG.API
const { MATERIAS: PATH } = CONFIG.ROUTER

const edit = ({ id = 0, nombre = '', estado = 1, error }) => {
	if (error && error.statusCode) { return <Error statusCode={error.statusCode} title={error.statusText} /> }

	return (
		<Layaout>
			<GenericEdit
				id={id}
				nombre={nombre}
				estado={estado}
				pathRetun={PATH}
				api={API}
				title={TITLE_EDIT}
			/>
		</Layaout>
	)
}

export async function getServerSideProps (props) {
	try {
		const response = await fetch(`${API}/${props.params.id}`)

		console.log(response.status)

		if (response.status === 200) {
			const data = await response.json()
			return { props: data }
		}

		return {
			props: {
				error: {
					statusCode: response.status,
					statusText: 'Invalid Id'
				}
			}
		}
	} catch (error) {
		console.log(error)
		return { props: {} }
	}
}

export default edit
