import React from "react";
import DisplayOrder from './DisplayOrder.js'

export default class OrderList extends React.Component {
    
    render() {
      let rows = []
      rows= (this.props.orders === undefined) ? [] :  this.props.orders.map((order) => (
           <DisplayOrder
            key={'customer-' + order.id}
            order = {order}
            ></DisplayOrder>
        ));

        return (
            <div>
                    <button onClick={()=>{this.props.orderDisplayClick(this.props.customerId)}} id="list-c">List Of Orders</button>
        {rows}
            </div>
        )
    }
}
