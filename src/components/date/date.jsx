import React from 'react'
import './date.css'

const months = ["January", "February", "March", "April", "May", "June", "July", 
					"August", "September", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const date = props => {
return (
	<>
		<div className = 'date-con'>
			<p>{days[props.dt.day]}, {months[props.dt.month]} {props.dt.date} {props.dt.year}, {props.dt.time}</p>		
		</div>
	</>)
}


export default date	