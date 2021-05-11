import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import purple from "@material-ui/core/colors/purple";
import indigo from "@material-ui/core/colors/indigo";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Arial'
    },
    palette: {
        primary: {500: '#ffd600'},
        secondary: {500: '#1a1a1a', A400: '#1a1a1a'},
    },
    overrides: {
        // Style sheet name ⚛️
        MuiTab: {
            root: {
                textTransform: 'none',
            },
            textColorSecondary: {
                fontSize: '12px',
            }
        },
        MuiTabs: {
            indicator: {
                // color: '#ffffff',
                // backgroundColor: deepOrange["A400"],
                // padding: '1px'
            },
            flexContainer: {
                // backgroundColor: deepOrange["50"],
                // borderTopRightRadius: '15px',
                // borderTopLeftRadius: '15px'
            }
        },
        MuiChip: {
            labelSmall: {
                fontSize: '10px',
            }
        },
        MuiTypography: {
            h6: {
                fontSize: '14px'
            },
        },
        MuiOutlinedInput: {
            root: {
                fontSize: '14px',
                borderRadius: '8px',
                // background: purple["50"],
                // background: `linear-gradient(to right,${blueGrey["50"]},${red["50"]})`,
            },
        },
        MuiFormControlLabel: {
            label: {
                fontSize: '12px'
            }
        },
        MuiInputLabel: {
            root: {
                fontSize: '9px',
            },
        },
        MuiFilledInput: {
            root: {
                fontSize: '14px',
            }
        },
        MuiBottomNavigation: {
            root: {
                borderTopRightRadius: '15px',
                borderTopLeftRadius: '15px',
                background: `linear-gradient(to right,${purple["50"]},${indigo["50"]})`,
            }
        },
        MuiAppBar: {
            colorPrimary: {
                color: 'white',
                // background: 'linear-gradient(to right,#9773db,#6190E8)',
            },
            colorSecondary: {
                color: 'white',
                // background: 'linear-gradient(to right,#9773db,#6190E8)',
            },
            root: {
                // borderBottomLeftRadius: '15px',
                // borderBottomRightRadius: '15px',
            },
            colorDefault: {
                // color: 'white',
                // background: 'linear-gradient(to right,#9773db,#6190E8)',
            }
        },
        MuiAvatar: {
            colorDefault: {
                background: `linear-gradient(to right,${purple["100"]},${indigo["100"]})`,
                // background: 'linear-gradient(135deg,#FFC371, #FF5F6D)',
            }
        },
        MuiButton: {
            // Name of the rule
            contained: {
                textTransform: 'none',
                fontWeight: 'normal',
                borderRadius: 10,
                fontSize: 12,
                background: '#FF5F6D',
                // background: 'linear-gradient(135deg,#FFC371, #2979ff)',
                height: 38,
            },
            outlined: {
                textTransform: 'none',
                fontWeight: 'normal',
                borderRadius: 10,
                fontSize: 12,
                height: 38
            },
            text: {
                textTransform: 'none',
                fontWeight: 'normal',
                borderRadius: 10,
                fontSize: 12,
                height: 38
            }
        },
        MuiTextField: {
            root: {
                borderRadius: 10,
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: '12px'
            }
        }
    },
});
export default theme
/* MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            },
            contained: {
                borderRadius: 50,
                height: 48,
            }
        },*/
