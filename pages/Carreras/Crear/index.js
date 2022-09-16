import Layaout from 'components/Layaout'
import GenericEdit from 'components/GenericEdit'
import { CONTENT } from 'content'
import { CONFIG } from 'config'

const { TITLE_NEW } = CONTENT.CARRERAS
const { CARRERAS: API } = CONFIG.API
const { CARRERAS: PATH } = CONFIG.ROUTER

const index = () => {
	return (
		<Layaout>
			<GenericEdit pathRetun={PATH} title={TITLE_NEW} api={API} />
		</Layaout>
	)
}

export default index
