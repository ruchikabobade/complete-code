import React from 'react';
import UpdateCustomerContainer from '../containers/UpdateCustomerContainer.js'

export default class DisplayCustomer extends React.Component {

    componentWillMount() {
        this.state = {
            id: this.props.customer.id,
            name: this.props.customer.name,
            addressLine1: this.props.customer.addressLine1,
            addressLine2: this.props.customer.addressLine2,
            age: this.props.customer.age,
            postCode: this.props.customer.postCode,
            isHidden: true
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {

        return (
            <div id="outerDiv">
                <div id="dataDiv">
                    <span className="heading">Customer id:</span><span> {this.props.customer.id}</span> <br />
                    <span className="heading">Customer name:</span><span> {this.props.customer.name}</span> <br />
                    <span className="heading">Address Line 1:</span><span> {this.props.customer.addressLine1}</span> <br />
                    <span className="heading">Address Line 2:</span><span> {this.props.customer.addressLine2}</span> <br />
                    <span className="heading">Age:</span><span> {this.props.customer.age}</span> <br />
                    <span className="heading">Postcode:</span><span> {this.props.customer.postCode} </span><br />
                </div>
                <div id="actions">

                    <button onClick={this.toggleHidden.bind(this)} id="update-c"> Update</button>
                    <button onClick={() => { this.props.deleteClick(this.state.id) }} id="delete-c"> Delete</button>
                </div>

                <div>

                    {!this.state.isHidden ? <div> <UpdateCustomerContainer customer={this.state} /><button onClick={this.toggleHidden.bind(this)} id="close"> close</button></div> : ""}
                </div>

            </div>
        )
    }
}
