import {GoogleLogout} from "react-google-login";
import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";

export default function GoogleLogoutForm({onSuccess, googleauthclientid}) {
    return (
        <GoogleLogout
            clientId={googleauthclientid}
            render={renderProps => {
                return <Button
                    disableRipple
                    fullWidth
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    variant="outlined"
                    color="default"
                    startIcon={<ExitToAppIcon/>}>
                    Sign out
                </Button>
            }}
            buttonText="Sign out"
            onLogoutSuccess={onSuccess}
        />
    )
}
