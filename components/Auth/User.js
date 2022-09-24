
import Layaout from 'components/Layaout'
import { UI } from 'edt-lib'
import {
	useAuthUser
} from 'next-firebase-auth'

const index = () => {
	const AuthUser = useAuthUser()
	console.log(AuthUser)
	const { Title } = UI

	return (
		<Layaout>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-40'>
						<Title label="Datos" />
					</div>

					<div className='start-2 size-2 padding-v-20'>
						<h3>displayName</h3>
					</div>
					<div className='start-5 size-6 padding-v-20'>
						{AuthUser ? AuthUser.displayName : ''}
					</div>

					<div className='start-2 size-2 padding-v-20'>
						<h3>email</h3>
					</div>
					<div className='start-5 size-6 padding-v-20'>
						{AuthUser ? AuthUser.email : ''}
					</div>

					<div className='start-2 size-2 padding-v-20'>
						<h3>emailVerified</h3>
					</div>
					<div className='start-5 size-6 padding-v-20'>
						{AuthUser ? AuthUser.emailVerified : ''}
					</div>

					<div className='start-2 size-2 padding-v-20'>
						<h3>phoneNumber</h3>
					</div>
					<div className='start-5 size-6 padding-v-20'>
						{AuthUser ? AuthUser.phoneNumber : ''}
					</div>

				</div>
			</div>
		</Layaout>
	)
}

export default index
