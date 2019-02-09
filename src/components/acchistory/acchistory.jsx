import React from 'react'
import {connect} from 'react-redux'

import './acchistory.css'


const acchistory = props => (<>

	<div className = 'acch-con'>

		<table className = 'table'>
			<thead>
				<tr>
					<th scope = 'col'>Action</th>
					<th scope = 'col'>Value</th>
					<th scope = 'col'>Date</th>
				</tr>
			</thead>

			<tbody>
			{props.tabled.map(d =>
				<tr>
					<td>{d.dt}</td>
					<td>{d.val}</td>
					<td>{d.ad}</td>
				</tr>	
			)}
			</tbody>
		</table>
	</div>

	</>)

const mapStateToProps = (state) => {
	return{
	tabled : state.bank.tabledata
}
}


export default connect(mapStateToProps)(acchistory)