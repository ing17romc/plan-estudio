import React, { useState } from 'react'
import { UI, functions } from 'edt-lib'
import Link from 'next/link'
import firebase from 'firebase/app'
import 'firebase/auth'
import { CONFIG } from 'config'
import context from './content'
import PropTypes from 'prop-types'

const { USUARIOS } = CONFIG.ROUTER
const { EMAIL, PASSWORD, RESET_PASSWORD, LOGIN, REGISTER } = context
const style = {
	width: '50%',
	border: '1px solid black',
	textAlign: 'left'
}
const { getValueInput } = functions

const TYPE_PAGE = {
	LOGIN: 'login',
	PASSWORD: 'password',
	REGISTER: 'register'
}

function Auth ({ type }) {
	const [state, setstate] = useState({
		email: '',
		password: ''
	})

	const onInputChange = e => {
		const object = getValueInput(e)
		if (e) {
			setstate({
				...state,
				[object.key]: object.value
			})
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		// alert('Form submitted ')
		if (type === TYPE_PAGE.REGISTER) {
			firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
				.then((userCredential) => {
				// Signed in
					const user = userCredential.user
					// ...
					console.log(user)
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					// ..

					console.log(errorCode, errorMessage)
				})
		} else if (type === TYPE_PAGE.LOGIN) {
			firebase.auth().signInWithEmailAndPassword(state.email, state.password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user
					// ...
					console.log(user)
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					// ..
					console.log(errorCode, errorMessage)
				})
		}
	}

	const getTitle = (type) => {
		switch (type) {
		case TYPE_PAGE.LOGIN:
			return	LOGIN.TITLE
		case TYPE_PAGE.REGISTER:
			return REGISTER.TITLE
		case TYPE_PAGE.PASSWORD:
			return ''
		default:
			return ''
		}
	}
	const getButton = (type) => {
		switch (type) {
		case TYPE_PAGE.LOGIN:
			return	LOGIN.BUTTON_TITLE
		case TYPE_PAGE.REGISTER:
			return REGISTER.BUTTON_TITLE
		case TYPE_PAGE.PASSWORD:
			return ''
		default:
			return ''
		}
	}

	const getLink = (type) => {
		switch (type) {
		case TYPE_PAGE.LOGIN:
			return <>
				{LOGIN.LABEL}&nbsp;
				<Link href={USUARIOS.REGISTER}>{LOGIN.LINK}</Link>
			</>
		case TYPE_PAGE.REGISTER:
			return <>
				{REGISTER.LABEL}&nbsp;
				<Link href={USUARIOS.LOGIN}>{REGISTER.LINK}</Link>
			</>
		case TYPE_PAGE.PASSWORD:
			return ''
		default:
			return ''
		}
	}

	return (
		<div className="main-container bg-white">
			<div className="center padding-v-100">
				<form className="padding-v-30" style={style} onSubmit={handleSubmit}>
					<div className='grid-primary'>
						<div className='start-1 size-12 padding-v-60'>
							<h1>{getTitle(type)}</h1>
						</div>

						<div className='grid-secondary'>
							<div className='start-1 size-20'>
								<UI.TextBox
									titleTop={ EMAIL.TITLE }
									id='email'
									value={state.email}
									eventChange={e => onInputChange(e)}
									placeholder={ EMAIL.PLACEHOLDER }
								/>
							</div>
							<div className='start-1 size-20'>
								<UI.TextBox
									titleTop={ PASSWORD.TITLE }
									id='password'
									value={state.password}
									eventChange={e => onInputChange(e)}
									placeholder={ PASSWORD.PLACEHOLDER }
									isPassword={true}
								/>
							</div>
							<div className='start-1 size-20 '>
								{RESET_PASSWORD.LABEL}&nbsp;
								<Link href={USUARIOS.RESET_PASSWORD}>{RESET_PASSWORD.LINK}</Link>
							</div>
							<div className='start-1 size-20 padding-v-20'/>
							<div className='start-1 size-13  center-vertical'>
								{getLink(type)}
							</div>
							<div className='start-14 size-7 padding-v-30'>
								<UI.Button
									title={getButton(type)}
									type='primary'
								/>
							</div>
						</div>
					</div>

				</form>
			</div>
		</div>
	)
}

Auth.propTypes = {
	type: PropTypes.oneOf([TYPE_PAGE.LOGIN, TYPE_PAGE.REGISTER, TYPE_PAGE.PASSWORD])
}

export default Auth
