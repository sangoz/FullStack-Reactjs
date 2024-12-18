import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        };
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        //bad code
        /*
        this.state = {
        email: '',
        password: '',
        ...
        }
        this.state.email === this.state['email']
        
        */
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log("Check bad state: ", this.state);
        // })

        //good code
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //call api create modal
            this.props.createNewUser(this.state);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className="modal-user-container"
                size="lg"
            >
                <ModalHeader toggle={() => { this.toggle() }} className="modal-title">Create a new user</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 form-group mt-1">
                                <label>Email</label>
                                <input type="text" className="form-control mt-2" placeholder="Email"
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "email"
                                        )
                                    }}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="col-6 form-group mt-1">
                                <label>Password</label>
                                <input type="password" className="form-control mt-2" placeholder="Password"
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "password"
                                        )
                                    }}
                                    value={this.state.password}
                                />
                            </div>
                            <div className="col-6 form-group mt-3">
                                <label>First name</label>
                                <input type="text" className="form-control mt-2" placeholder='First name'
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "firstName"
                                        )
                                    }}
                                    value={this.state.firstName}
                                />
                            </div>
                            <div className="col-6 form-group mt-3">
                                <label>Last name</label>
                                <input type="text" className="form-control mt-2" placeholder='Last name'
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "lastName"
                                        )
                                    }}
                                    value={this.state.lastName}
                                />
                            </div>
                            <div className="col-12 form-group mt-3">
                                <label>Address</label>
                                <input type="text" className="form-control mt-2" placeholder='Address'
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "address"
                                        )
                                    }}
                                    value={this.state.address}
                                />
                            </div>

                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-3"
                        onClick={() => { this.handleAddNewUser() }}>
                        Add new
                    </Button>{' '}
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


