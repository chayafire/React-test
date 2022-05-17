import React from 'react';
import { connect } from 'react-redux';
import '../index.css';
function mapStateToProps(state) {
    return {
        userDetails: state.userDetails
    };
}

export default connect(mapStateToProps)(function User(props) {
    const { userDetails } = props;

    const wrapperStyle = {
        boxShadow: " 0 2px 15px 0 rgb(129 152 172 / 19%)",
        padding: "10px"
    };

    if (userDetails.userName.length > 0) {
        return (
            //If enter data return userName & phone
            <div className='username'>
                <div className="container">
                    <div className='col-6' style={wrapperStyle}>
                        <p><strong>User name:</strong> {userDetails.userName}</p>
                        <p><strong>Phone Number:</strong> {userDetails.phone}</p>
                    </div>

                </div>
            </div>
        );
    }
    //If not enter data return error
    else {
        return (
            <div className="container">
                <div className="alert alert-danger col-5" role="alert">
                    Please enter user details!
                </div>
            </div>
        )
    }

});