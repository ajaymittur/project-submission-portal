import React from "react";
import { GoogleLogout } from 'react-google-login'
import { withRouter } from 'react-router-dom' 
import '../styles/dashboard.css'

class Dashboard extends React.Component {
    render() {
        return (
            <div className="container">
                <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={() => this.props.history.push('/')}
                />

                <h2 className="dashboard">Dashboard</h2>
                <h3 className="welcome">Welcome {this.props.location.state.Name}</h3>

                <form id="upload" action="dashboard/upload/" method="post" enctype="multipart/form-data">
                    <input type="file" name="file" multiple />
                    <input type="submit" name="submit" id="btnSubmit" value="Upload" />
                </form>
            </div>
        )
    }
}

export default withRouter(Dashboard)