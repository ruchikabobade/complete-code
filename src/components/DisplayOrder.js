import React from 'react';


export default class DisplayOrder extends React.Component {
    render(){
        return(
            <div>
               Order ID :  {this.props.order.id} &nbsp;
               Order Description : {this.props.order.orderName}
                </div>
        )
    }
}
