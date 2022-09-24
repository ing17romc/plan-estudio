
import NavBar from './NavBar'
import { LEFT_OPTIONS, RIGHT_OPTIONS } from '../constants'
import { CONFIG } from 'config'
import {
	useAuthUser
} from 'next-firebase-auth'
const { USUARIOS } = CONFIG.ROUTER

const Layaout = ({ children }) => {
	const AuthUser = useAuthUser()

	const getRightOptions = () => {
		if (AuthUser.email) {
			const element = { path: USUARIOS.USER, name: AuthUser.email }
			if (!RIGHT_OPTIONS.find(element => element.name === AuthUser.email)) { RIGHT_OPTIONS.unshift(element) }
		}
		return RIGHT_OPTIONS
	}

	return <div className='main-container bg-white'>
		<NavBar
			leftOptions={LEFT_OPTIONS}
			rightOptions={getRightOptions()}
		/>
		{children}
	</div>
}

export default Layaout
