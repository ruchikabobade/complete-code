import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import DisplayCustomer from "../components/DisplayCustomer.js"

class DisplayCustomerContainer extends React.Component{
    
    render(){
        return(
            <DisplayCustomer deleteClick={this.props.deleteCustomer} customer={this.props.customer}>
            </DisplayCustomer>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCustomer: (id)=>dispatch((actionCreators.deleteCustomer(id)))
    }
}

export default connect (mapDispatchToProps, actionCreators)(DisplayCustomerContainer);

