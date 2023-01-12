
import { UI } from 'edt-lib'
import { useRouter } from 'next/router'
import { LEFT_OPTIONS, RIGHT_OPTIONS } from '../constants'
import { CONFIG } from 'config'
import {
	useAuthUser
} from 'next-firebase-auth'
const { USUARIOS } = CONFIG.ROUTER
const { EXIT_APP } = CONFIG.ROUTER

const Layaout = ({ children }) => {
	const router = useRouter()
	const AuthUser = useAuthUser()

	const event = (path) => {
		console.log(path === EXIT_APP, path, EXIT_APP)
		if (path === EXIT_APP) {
			AuthUser.signOut()
		} else {
			router.push(path)
		}
	}

	const getRightOptions = () => {
		if (AuthUser.email) {
			const element = { path: USUARIOS.USER, name: AuthUser.email }
			if (!RIGHT_OPTIONS.find(element => element.name === AuthUser.email)) { RIGHT_OPTIONS.unshift(element) }
		}
		return RIGHT_OPTIONS
	}

	return <UI.Layout
		leftOptions={LEFT_OPTIONS}
		rightOptions={getRightOptions()}
		currentPath={router.asPath}
		getCurrentPath={(path) => event(path)}
		footer={<p>PLAN ESTUDIO</p>}>
		{children}
	</UI.Layout>
}

export default Layaout
