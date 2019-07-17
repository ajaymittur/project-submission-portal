import React from "react";
import { GoogleLogin } from 'react-google-login'
import { withRouter } from 'react-router-dom'
import '../styles/home.css'

class Home extends React.Component {
    signIn = (profile) => {
        let googleUser = profile.getBasicProfile()
        let googleUserData = {
            Name: googleUser.getName(),
            Email: googleUser.getEmail()
        }
        return (
                this.props.history.push('/dashboard', googleUserData)
        )
    }

    render() {
        return (
            <div id="container">
                <h1>Self Study Submission</h1>
                <GoogleLogin
                    clientId="your client id"
                    buttonText="Login to your BMSCE account"
                    onSuccess={this.signIn}
                />          
            </div>
        )
    }
}

export default withRouter(Home)
