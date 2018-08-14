import React from 'react';

export default class UpdateCustomer extends React.Component {

    componentWillMount(){
        this.state={
            id: this.props.customer.id,
            name : this.props.customer.name,
            addressLine1 : this.props.customer.addressLine1,
            addressLine2 : this.props.customer.addressLine2,
            age : this.props.customer.age,
            postCode : this.props.customer.postCode
        }
    }

    captureName(e){
        this.setState({name: e.target.value})
    }

    captureAddressLine1(e){
        this.setState({addressLine1: e.target.value})
    }

    captureAddressLine2(e){
        this.setState({addressLine2: e.target.value})
    }

    captureAge(e){
        this.setState({age: e.target.value})
    }

    capturePostcode(e){
        this.setState({postCode: e.target.value})
    }

    render() {

        return (
            <form>
                Id : <input type="number" value={this.state.id} readOnly></input> <br />
                Name: <input type="text" value={this.state.name} onChange={this.captureName.bind(this)}></input> <br />
                Address Line 1 : <input type="text" value={this.state.addressLine1} onChange={this.captureAddressLine1.bind(this)}></input> <br/>
                Address Line 2 : <input type="text" value={this.state.addressLine2} onChange={this.captureAddressLine2.bind(this)}></input> <br/>
                Age : <input type="number" value={this.state.age} onChange={this.captureAge.bind(this)} /><br />
                Postcode : <input type="number" value={this.state.postCode} onChange={this.capturePostcode.bind(this)} /><br />
                <button type="submit" onClick={()=>{this.props.updateClick(this.state.id,this.state.name,
                                                    this.state.addressLine1,
                                                    this.state.addressLine2,
                                                    this.state.age,
                                                    this.state.postCode)}} id="update">Update Customer</button>
            </form>
        )
    }

}

