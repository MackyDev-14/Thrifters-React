import React from 'react';
import {connect} from 'react-redux'

import Bank from './bank.png'
import './account.css'

const account = (props) => {
	return(
	<div className = 'acc-con'>
			<h3>Current Savings</h3>
			<h4> {props.bank.savings} </h4>
			<div className = 'row'>
				<div className = 'col-4 box'>
					<div>
					<h3> Deposit </h3>
					<input value = {props.bank.input1} type = 'text' onChange = {(e)=>props.chge1(e.target.value)}/>
					<button onClick = {() => props.depo(Number(props.bank.input1),props.daterdc.completeDate)} ><i className = 'fas fa-hand-point-right'/></button>
					</div>
				</div>
				<div className = 'col-4 box'>
					<img style = {{height: 'auto',width: '100%'}} src = {Bank} alt = 'bank' />
				</div>
				<div className = 'col-4 box'>
					<div>
					<h3> Withdraw </h3>
					<input value = {props.bank.input2} type = 'text' onChange = {(e)=>props.chge2(e.target.value) } />
					<button onClick = {() => props.wdraw(Number(props.bank.input2), props.daterdc.completeDate)} ><i className = 'fas fa-hand-lizard'/></button>
					</div>

				</div>
			</div>
	</div>
)}

	const mapStateToProps = (state) => {
		return{
			bank: state.bank,
			daterdc: state.dateRDC
		}
	} 

	const mapDispatchToProps = dispatch => {
		return{
			depo: (val, dt) => {
				dispatch({
					type: 'deposit',
					payload: val,
					ac: 'deposit',
					date: dt,
				})
			},

			wdraw: (val, dt) => {
				dispatch({
					type: 'withdraw',
					payload: val,
					ac: 'withdraw',
					date: dt,
				})
			},

			chge1: (inp) => {
				dispatch({
					type: 'change1',
					payload: inp
				})
			},

			chge2: (inp) => {
				dispatch({
					type: 'change2',
					payload: inp
				})
			},
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(account);