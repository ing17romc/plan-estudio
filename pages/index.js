
import Layout from 'components/Layout'
import Menu from 'components/Menu'
import { MENU_OPTIONS } from '../constants'
import {
	AuthAction,
	withAuthUser,
	withAuthUserTokenSSR
} from 'next-firebase-auth'

const index = () => {
	return <Layout>
		<Menu options={MENU_OPTIONS} />
	</Layout>
}

export const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})()

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(index)
