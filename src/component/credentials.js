import React from "react";
import LoginButton from "./login-button";

let e = React.createElement;

export default class Credentials extends React.Component {
    render() {
        return (
            <div className="card w-75">
            <div className="card-header bg-success text-white">
                Username and Password
            </div>
            <div className="card-body">
                comment content
            </div>
            <div className="card-footer">
                <LoginButton />
            </div>
            </div>
            
        );
    }
}