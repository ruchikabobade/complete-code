import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import AddOrder from "../components/AddOrder.js"

class CustomerOrderContainer extends React.Component{
    render(){
        return(
            <AddOrder orderClick={this.props.addOrder} customerId={this.props.customerId}></AddOrder>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOrder: (customerId, orderName)=>dispatch((actionCreators.addOrder(customerId, orderName)))
    }
}

export default connect (mapDispatchToProps, actionCreators)(CustomerOrderContainer);