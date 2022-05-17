import React, { useState } from "react";
import { connect } from 'react-redux';
import { setNewUserDetails } from '../redux/actions';
function mapStateToProps(state) {
    return {
        userDetails: state.userDetails
    };
}


export default connect(mapStateToProps)(function Form(props) {
    const { dispatch } = props
    const [userName, setUserName] = useState("")
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [validationPassword, setValidationPassword] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [validationPasswordError, setValidationPasswordError] = useState("");

    const handleValidation = () => {
        let formIsValid = true;


        //Chek userName vaidation and return true or false
        if (userName.length > 32) {
            formIsValid = false;
            setUserNameError(
                "User name should be upto 32 chars"
            );
            return false;
        } else {
            setUserNameError("");
            formIsValid = true;
        }
        //Chek phone vaidation if phone length upto 10 numbers and char is only numbers
        //and return true or false

        if (phone.length > 10 || !phone.match(/^\d+/)) {
            formIsValid = false;
            setPhoneError(
                "Phone should be upto 10 numbers"
            );
            return false;
        } else {
            setPhoneError("");
            formIsValid = true;
        }
        //Chek phone vaidation and return true or false
        if (!password.match(/^(?=.*?[A-Z])(?=.*?[^\w\s]).{6,12}$/)) {
            formIsValid = false;
            setpasswordError(
                "Password should includes 6-12 chars uppercase letter and special char"
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }

        //Chek if password verification is correct
        if (password !== validationPassword) {

            formIsValid = false;
            setValidationPasswordError(
                "Incorrect password verification"
            );
            return false;
        } else {
            setValidationPasswordError("");
            formIsValid = true;
        }


        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
        addUserDetails();
    };

    //Object to save user details and send it to redux with dispatch
    const userDetails = {
        userName: userName,
        phone: phone,
        password: password
    }
    function addUserDetails() {
        dispatch(setNewUserDetails(userDetails));
    }

    return (
        <div className="container">
            <div className="form">
                <div className="row d-flex justify-content-left">
                    <div className="col-md-4">
                        <form id="loginform" onSubmit={loginSubmit}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="UserName"
                                    onChange={(event) => setUserName(event.target.value)}
                                />
                                <small className="text-danger form-text">
                                    {userNameError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                                <small className="text-danger form-text">
                                    {phoneError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <small className="text-danger form-text">
                                    {passwordError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Validation password" onChange={(event) => setValidationPassword(event.target.value)}
                                />
                                <small className="text-danger form-text">
                                    {validationPasswordError}
                                </small>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                SUBMIT
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </div>

    );
})

