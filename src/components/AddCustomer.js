import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js"

class AddCustomer extends React.Component {

    componentWillMount() {
        this.state = {
            id: 0,
            name: "",
            addressLine1: "",
            addressLine2: "",
            age: 0,
            postCode: 0
        }
    }

    captureName(e) {
        this.setState({ name: e.target.value })
    }

    captureAddressLine1(e) {
        this.setState({ addressLine1: e.target.value })
    }

    captureAddressLine2(e) {
        this.setState({ addressLine2: e.target.value })
    }

    captureAge(e) {
        this.setState({ age: e.target.value })
    }

    capturePostcode(e) {
        this.setState({ postCode: e.target.value })
    }

    render() {

        return (
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-25">
                            <label for="name">Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" value={this.state.name} onChange={this.captureName.bind(this)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="addressLine1">Address Line 1</label>
                        </div>
                        <div className="col-75">

                            <input type="text" value={this.state.addressLine1} onChange={this.captureAddressLine1.bind(this)}></input> <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="addressLine2">Address Line 2</label>
                        </div>
                        <div className="col-75">
                            <input type="text" value={this.state.addressLine2} onChange={this.captureAddressLine2.bind(this)}></input> <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="age">Age</label>
                        </div>
                        <div className="col-75">
                            <input type="number" value={this.state.age} onChange={this.captureAge.bind(this)} /><br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="postCode">Postcode</label>
                        </div>
                        <div className="col-75">
                            <input type="number" value={this.state.postCode} onChange={this.capturePostcode.bind(this)} /><br />
                        </div>
                    </div>
                    <button type="submit" onClick={() => {
                        this.props.saveCustomer(this.state.id, this.state.name,
                            this.state.addressLine1,
                            this.state.addressLine2,
                            this.state.age,
                            this.state.postCode)
                    }} id="save-c">Add Customer</button>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        saveCustomer: (id, name, addressLine1, addressLine2, age, postCode) => dispatch((actionCreators.saveCustomer(id, name, addressLine1, addressLine2, age, postCode)))
    }
}

export default connect(mapDispatchToProps, actionCreators)(AddCustomer);