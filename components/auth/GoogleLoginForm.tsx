import {GoogleLogin} from "react-google-login";
import React from "react";
import theme from "../../src/theme";

export default function GoogleLoginForm({onSuccess, onFailure, buttonLabel, googleauthclientid}) {

    return (
        <GoogleLogin
            clientId={googleauthclientid}
            buttonText={buttonLabel}
            style={{marginTop: theme.spacing(2)}}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={false}
        />
    )
}


