import createTheme from '@mui/material/styles/createTheme';
import Texture from '../assets/bg_seamless.jpg'

const theme = createTheme({
    // palette: https://colorkit.co/palette/e2e6e4-edbbc8-f5bea3-d98e7d-66786a/
    palette: {
        primary: {
            main: '#f19cbb',
            dark: '#5b3b40',
            light: '#f49fac'
        },
        secondary: {
            main: '#66786a',
        },
        info: {
            main: '#f5bea3',
        },
        neutral: {
            main: '#e2e6e4',
        },
        error: {
            main: '#d98e7d',
        },
        text: {
            darkprimary: '#5b3b40',
            primary: '#edbbc8'
        }
    },
    typography: {
        fontFamily: [
            'monospace'
        ].join(','),
        inkbar: {
            paddingRight: 5,
            paddingLeft: 5,
            zIndex: 1,
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#f19cbb',
            backgroundColor: 'black',
            textDecoration: 'none', 
            textShadow: '1px 2px #66786a',
        },
    },
    styles: {
        bgStyle: {
            backgroundImage: `url(${Texture})`,
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            overflow: 'auto',
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
            zIndex: -1
        }
    }
});

export default theme;