import React from 'react'
import {BrowserRouter,Link, Route} from 'react-router-dom'
import Account from '../account/account.jsx'
import Acchistory from '../acchistory/acchistory.jsx'
import Accset from '../accountset/accountset'

import './sidebar.css'
import logo from './Thrifters_logo.png'


const sidebar = props => (<>
		<div className = 'sb-con'>
			<div><img style = {{height: '150px'}} src = {logo} alt = 'thrifters' />	</div>
					<Link to = '/' className = 'navs' > My Account </Link>
					<Link to = '/history' className = 'navs' > Account History </Link>
					<Link to = '/settings' className = 'navs' > Account Settings  </Link>
					<Link to = '/' className = 'navs' > Log out </Link>
		</div>
	</>)

export default sidebar;