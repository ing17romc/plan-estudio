import React from 'react'
import { useRouter } from 'next/router'
import { UI } from 'edt-lib'

const NavBar = ({ leftOptions, rightOptions }) => {
	const router = useRouter()

	return (
		<UI.NavBar
			leftOptions={leftOptions}
			rightOptions={rightOptions}
			correntPath={router.asPath}
			getCurrentPath={(path) => router.push(path)}
		/>
	)
}

export default NavBar
