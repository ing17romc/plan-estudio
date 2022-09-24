
import Layaout from 'components/Layaout'
import GenericList from 'components/GenericList'
import { TABLE_HEADERS } from '../../constants'
import { CONTENT } from 'content'
import { CONFIG } from 'config'
import {
	AuthAction,
	withAuthUser,
	withAuthUserTokenSSR
} from 'next-firebase-auth'

const { TITLE } = CONTENT.MATERIAS
const { MATERIAS: API } = CONFIG.API

const index = ({ data }) => (
	<Layaout>
		<GenericList
			title={TITLE}
			dt={data}
			tableHeaders={TABLE_HEADERS}
			api={API}
		></GenericList>
	</Layaout>
)

export const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})(async () => {
	try {
		const response = await fetch(API)
		const responseJSON = await response.json()

		return { props: { data: responseJSON.data } }
	} catch (error) {
		console.log(error)
		return { props: { data: [] } }
	}
})

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(index)
