import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import OrderList from "../components/OrderList.js"

class DisplayOrderContainer extends React.Component{
  
    render(){
        return(
            <OrderList  orders={this.props.orders} customerId={this.props.customerId} orderDisplayClick={this.props.loadOrders}></OrderList>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
       orders: state.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadOrders: (customerId)=>dispatch((actionCreators.loadOrders(customerId)))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(DisplayOrderContainer);