import Layout from 'components/Layout'
import GenericEdit from 'components/GenericEdit'
import { CONTENT } from 'content'
import { CONFIG } from 'config'
import Error from 'next/error'
import {
	AuthAction,
	withAuthUser,
	withAuthUserTokenSSR
} from 'next-firebase-auth'

const { TITLE_EDIT } = CONTENT.SEMESTRES
const { SEMESTRES: API } = CONFIG.API
const { SEMESTRES: PATH } = CONFIG.ROUTER

const edit = ({ id = 0, nombre = '', estado = 1, error }) => {
	if (error && error.statusCode) { return <Error statusCode={error.statusCode} title={error.statusText} /> }

	return (
		<Layout>
			<GenericEdit
				id={id}
				nombre={nombre}
				estado={estado}
				pathRetun={PATH}
				api={API}
				title={TITLE_EDIT}
			/>
		</Layout>
	)
}

export const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(async (props) => {
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
})

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(edit)
