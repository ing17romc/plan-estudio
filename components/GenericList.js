import { UI } from 'edt-lib'
import { getStatus } from 'lib/utils'
import { useRouter } from 'next/router'
import { CONFIG } from 'config'

const { CREAR } = CONFIG.ROUTER

const GenericList = ({ title, dt, tableHeaders, api }) => {
	const router = useRouter()
	const { Title, ImageButton } = UI

	const deleteElement = async (id) => {
		try {
			await fetch(`${api}/${id}`, {
				method: 'DELETE'
			})
			router.push(`${title}`)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="container-body">
			<div className="grid-primary ">
				<div className="start-1 size-12 padding-v-20">
					<Title label={title} />
				</div>

				<div className="start-1  padding-v-30" />
				<div className="grid-secondary bg-light-gray elevated">
					<div className="start-1 size-10 padding-v-30">
						<h3> Listado... </h3>
					</div>

					<div className="start-24 size-1 padding-v-20">
						<ImageButton
							id="add"
							icon="add"
							text="agregar elemento"
							size="sm"
							onClick={() => router.push(`${title}${CREAR}`)}
						/>
					</div>

					<div className="start-1 size-24 padding-v-20 ">
						<div>
							<table className=" big-table">
								<tbody>
									<tr>
										<th style={{ width: '10%' }}>{tableHeaders[0]}</th>
										<th style={{ width: '60%' }}>{tableHeaders[1]}</th>
										<th style={{ width: '10%' }}>{tableHeaders[2]}</th>
										{
										/* tableHeaders.map((element, i) => (
											<th style={{ width: '10%' }} key={i}>{element}</th>
										)) */
										}
										<th style={{ width: '10%' }}></th>
										<th style={{ width: '10%' }}></th>
									</tr>
									{dt.map((element, i) => (
										<tr key={i}>
											<td style={{ width: '10%' }}>{element.id}</td>
											<td style={{ width: '60%' }}>{element.nombre}</td>
											<td style={{ width: '10%' }}>
												<div
													className={
														!element.estado
															? 'font-bold font-red'
															: 'font-bold font-green'
													}
												>
													{getStatus(element.estado)}
												</div>
											</td>
											<td style={{ width: '10%' }}>
												{' '}
												<ImageButton
													id="mode_edit"
													icon="mode_edit"
													text="editar"
													size="sm"
													onClick={() => router.push(`${title}/${element.id}`)}
												/>{' '}
											</td>
											<td style={{ width: '10%' }}>
												{' '}
												<ImageButton
													id="delete"
													icon="delete"
													text="eliminar"
													size="sm"
													onClick={() => deleteElement(element.id)}
												/>{' '}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="padding-v-20"></div>
					</div>
				</div>

				<div className="start-1 padding-v-20" />
			</div>
		</div>
	)
}

export default GenericList
