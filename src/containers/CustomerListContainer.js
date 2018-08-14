import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import CustomerList from "../components/CustomerList.js"

class CustomerListContainer extends React.Component{
    render(){
        return(
            <CustomerList customerClick={this.props.loadCustomer} customers={this.props.customers}></CustomerList>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
       customers: state.customers
    };
};

export default connect (mapStateToProps, actionCreators)(CustomerListContainer);