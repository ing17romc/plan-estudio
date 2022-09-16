
import NavBar from './NavBar'
import { LEFT_OPTIONS, RIGHT_OPTIONS } from '../constants'

const Layaout = ({ children }) => {
	return <div className='main-container bg-white'>
		<NavBar
			leftOptions={LEFT_OPTIONS}
			rightOptions={RIGHT_OPTIONS}
		/>
		{children}
	</div>
}

export default Layaout
