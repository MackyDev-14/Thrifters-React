import React, { Component } from 'react';
import {BrowserRouter, Link, Route } from 'react-router-dom';	
import {connect} from 'react-redux'


import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Showpane from './components/showpane/showpane'
import Ddate from './components/date/date'


class App extends Component {

  componentDidMount(){
    setInterval(this.props.dateac, 1000)
  }

  render() {
    return (
      <div className="App" >
        <BrowserRouter>
  	   	 <div className='app-con'>
                 <Ddate dt = {this.props.date} />
              <Sidebar />
     		     <Showpane />

          </div>
        </BrowserRouter>
     </div>
     
    );
  }
}

const mapStateToProps = state => {
  return{date: state.dateRDC}
}

const mapDispatchToProps = dispatch => {
  return{
      dateac: () => {
        const dg = new Date();
          dispatch({
            type: 'tick',
            month: dg.getMonth(),
            day: dg.getDay(),
            year: dg.getFullYear(),
            time: dg.toLocaleTimeString(),
            date: dg.getDate(),
            completeDate: dg.toUTCString()
      })
    },
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
