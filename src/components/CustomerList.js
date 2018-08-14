import React from "react";
import DisplayCustomerContainer from '../containers/DisplayCustomerContainer.js'

export default class CustomerList extends React.Component {
    
    render() {
      let rows = []
      rows= (this.props.customers === undefined) ? [] :  this.props.customers.map((customer) => (
           <DisplayCustomerContainer
            key={'customer-' + customer.id}
            customer = {customer}
            ></DisplayCustomerContainer>
        ));

        return (
            <div>
                    <button onClick={()=>{this.props.customerClick()}} id="list-c">List Of Customers</button>
        {rows}
            </div>
        )
    }
}



