import 'edt-lib/index.scss'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Icons"
					rel="stylesheet"
				/>
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
