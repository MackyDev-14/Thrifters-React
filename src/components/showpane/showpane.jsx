import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import './showpane.css'

import Account from '../account/account.jsx'
import Acchistory from '../acchistory/acchistory.jsx'
import Accset from '../accountset/accountset'

const showpane = props => (<>

	<div className = 'sp-con' >
			
				<Route path = '/' component = {Account} exact/>
				<Route path = '/history' component = {Acchistory} />
				<Route path = '/settings' component = {Accset} />
			
	</div>
	
	</>)

export default showpane