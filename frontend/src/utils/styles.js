import Texture from '../assets/bg_seamless.jpg'

const styles = {
    barTextStyle: {
        pl: 2,
        pr: 2,
        zIndex: 1,
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'primary.main',
        bgcolor: 'black',
        textDecoration: 'none', 
        textShadow: '1px 2px #66786a'
    },
    bgStyle: {
        backgroundImage: `url(${Texture})`,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        overflow: 'auto',
    }
};

export default styles;