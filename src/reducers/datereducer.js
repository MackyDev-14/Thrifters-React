const dateRDC = (state = {
	month: new Date().getMonth(),
    day: new Date().getDay(),
    year: new Date().getFullYear(),
    time: new Date().toLocaleTimeString(),
    date: new Date().getDate(),
    completeDate: Date()
}, action) => {
	switch(action.type){
		case 'tick':
			state = {
				month: action.month,
			    day: action.day,
			    year: action.year,
			    time: action.time,
			    date: action.date,
			    completeDate: action.completeDate
			}
				 break;
		default: return state;
	}
	return state;
}

export default dateRDC;