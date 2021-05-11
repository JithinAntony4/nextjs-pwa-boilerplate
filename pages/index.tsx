import React, {useState} from "react";
import {
    AppBar,
    Container,
    createStyles,
    IconButton,
    makeStyles,
    MenuItem,
    Snackbar,
    Theme,
    Toolbar,
    Typography
} from "@material-ui/core";
import {useRouter} from "next/router";
import {useUser} from "../lib/hooks";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "../src/theme";
import GoogleLoginForm from "../components/auth/GoogleLoginForm";
import GoogleLogoutForm from "../components/auth/GoogleLogoutForm";
import CloseIcon from '@material-ui/icons/Close';
import {GetServerSideProps} from "next";

export default function Home({googleauthclientid}) {
    let router = useRouter();
    let user = useUser();

    const [errorMsg, setErrorMsg] = useState("");
    const [message, setMessage] = useState("");

    function logout() {
        router.push(`/api/logout`);
    }

    async function onGoogleLoginSuccess(response) {
        try {
            const res = await fetch('/api/google/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: response.tokenId
                }),
            })
            if (res.status === 200) return setMessage("Welcome back user");
            setErrorMsg("Something went wrong!")
        } catch (error) {
            setErrorMsg(error)
        }
    }

    function onGoogleLoginFailure(response) {
        setErrorMsg(response.error)
    }

    let classes = useStyles();

    function handleClose() {
        if (errorMsg) setErrorMsg("")
        else setMessage("");
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar elevation={7} position="static">
                <Toolbar>
                    <Typography color={"secondary"} variant="h6" className={classes.title}>
                        NextJS-PWA-Boilerplate
                    </Typography>
                    {!user ?
                        <GoogleLoginForm googleauthclientid={googleauthclientid} buttonLabel={"Sign In"}
                                         onFailure={onGoogleLoginFailure}
                                         onSuccess={onGoogleLoginSuccess}/>
                        :
                        <MenuItem>
                            <GoogleLogoutForm googleauthclientid={googleauthclientid} onSuccess={logout}/>
                        </MenuItem>
                    }
                </Toolbar>
            </AppBar>
            <Container>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={(errorMsg !== "" || message !== "")}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={errorMsg || message}
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit"
                                        onClick={handleClose}>
                                <CloseIcon fontSize="small"/>
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </Container>
        </ThemeProvider>
    )
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            width: 250
        },
        root: {
            flexGrow: 1,
        },
        drawer: {
            paddingTop: theme.spacing(5),
            marginBottom: theme.spacing(3)
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            [theme.breakpoints.up('sm')]: {
                fontSize: '18px',
            },
        },
        large: {
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

export const getServerSideProps: GetServerSideProps = async (context) => {
    let googleauthclientid = process.env.GOOGLE_AUTH_CLIENT_ID;
    return {
        props: {
            googleauthclientid: googleauthclientid
        }, // will be passed to the page component as props
    }
}
