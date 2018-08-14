import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import UpdateCustomer from "../components/UpdateCustomer.js"

class UpdateCustomerContainer extends React.Component{
    render(){
        return(
            <UpdateCustomer updateClick={this.props.saveCustomer} customer={this.props.customer}></UpdateCustomer>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveCustomer: (id, name, addressLine1, addressLine2, age, postCode)=>dispatch((actionCreators.saveCustomer(id, name, addressLine1, addressLine2, age, postCode)))
    }
}

export default connect (mapDispatchToProps, actionCreators)(UpdateCustomerContainer);