

const bank = (state = {
 savings:0 ,
 tabledata: [],
 dateof: [], 
 dorw:[], 
 value: [],
 input1: '',
 input2: '',
},
	action) => {
			switch(action.type){
				case 'deposit':
					state = {...state, savings: state.savings + action.payload,
					 	tabledata: [...state.tabledata, {
					 		dt: action.ac,
					 		val: action.payload,
					 		ad: action.date
					 	}],
						input1: '' 
					}
					break;
				case 'withdraw':
					state = {...state, savings: state.savings - action.payload,
						tabledata: [...state.tabledata, {
					 		dt: action.ac,
					 		val: action.payload,
					 		ad: action.date
					 	}],


						input2: ''
					}
					break;
				case 'change1':
					state = {...state, input1: action.payload}
					break;
				case 'change2':
					state = {...state, input2: action.payload}
					break;
				default: return state;
			}
			return state;
		}

export default bank;