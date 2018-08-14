import React from 'react'
import {HashRouter, NavLink, Route} from 'react-router-dom'

import CustomerListContainer from '../containers/CustomerListContainer.js'
import AddCustomer from './AddCustomer.js'

export default class HomePage extends React.Component{
    render(){
        return(
            <HashRouter>
            <div>
                <h1>This will be the container of demo</h1>
                <div className="header1">
                <ul>
                    <li><NavLink exact to="/">Customers</NavLink></li>
                    <li><NavLink to="/addCustomer">Add new Customer</NavLink></li>
                </ul>

                </div>
                <div className="content1">
                <Route exact path="/" component={CustomerListContainer}></Route>
                <Route path="/addCustomer" component={AddCustomer}></Route>
                </div>
                </div>
             </HashRouter>
        )
    }
}