import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    render() {
        console.log("check child props", this.props);
        console.log("Check child open modal", this.props.isOpen);
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className="modal-user-container"
                size="lg"
            >
                <ModalHeader toggle={() => { this.toggle() }} className="modal-title">Create a new user</ModalHeader>
                <ModalBody>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-6 form-group mt-1">
                                <label>Email</label>
                                <input type="text" className="form-control mt-2" placeholder="Email" />
                            </div>
                            <div className="col-6 form-group mt-1">
                                <label>Password</label>
                                <input type="password" className="form-control mt-2" placeholder="Password" />
                            </div>
                            <div className="col-6 form-group mt-3">
                                <label>First name</label>
                                <input type="text" className="form-control mt-2" placeholder='First name' />
                            </div>
                            <div className="col-6 form-group mt-3">
                                <label>Last name</label>
                                <input type="text" className="form-control mt-2" placeholder='Last name' />
                            </div>
                            <div className="col-12 form-group mt-3">
                                <label>Address</label>
                                <input type="text" className="form-control mt-2" placeholder='Address' />
                            </div>
                            <div className="col-6 form-group mt-3">
                                <label>Phone number</label>
                                <input type="text" className="form-control mt-2" placeholder='Phone number' />
                            </div>
                            <div className="col-3 form-group mt-3">
                                <label for="inputState">Sex</label>
                                <select name="gender" class="form-control mt-2">
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                            </div>
                            <div className="col-3 form-group mt-3">
                                <label for="inputZip">Role</label>
                                <select name="roleId" class="form-control mt-2">
                                    <option value="0">Admin</option>
                                    <option value="1">Doctor</option>
                                    <option value="2">Patient</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => { this.toggle() }}>
                        Save change
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


