import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    // palette: https://colorkit.co/palette/e2e6e4-edbbc8-f5bea3-d98e7d-66786a/
    palette: {
        primary: {
            main: '#edbbc8',
        },
        secondary: {
            main: '#e2e6e4',
        },
        info: {
            main: '#f5bea3',
        },
        neutral: {
            main: '#66786a',
        },
        error: {
            main: '#d98e7d',
        },
    },
    text: {
        primary: '#ffffff',
        secondary: '#5394fc'
    }
});

export default theme;