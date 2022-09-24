import Layaout from 'components/Layaout'
import GenericEdit from 'components/GenericEdit'
import { CONTENT } from 'content'
import { CONFIG } from 'config'
import {
	AuthAction,
	withAuthUser,
	withAuthUserTokenSSR
} from 'next-firebase-auth'

const { TITLE_NEW } = CONTENT.MATERIAS
const { MATERIAS: API } = CONFIG.API
const { MATERIAS: PATH } = CONFIG.ROUTER

const index = () => {
	return (
		<Layaout>
			<GenericEdit pathRetun={PATH} title={TITLE_NEW} api={API} />
		</Layaout>
	)
}

export const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})()

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(index)
