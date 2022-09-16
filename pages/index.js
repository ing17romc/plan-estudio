
import Layaout from 'components/Layaout'
import Menu from 'components/Menu'
import { MENU_OPTIONS } from '../constants'

const index = () => (
	<Layaout>
		<Menu options={MENU_OPTIONS} />
	</Layaout>
)

export default index
