import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useTheme from '@mui/material/styles/useTheme';

export default function Product(props) {
    // props -> name, price, imageurl
    const theme = useTheme();
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                m: 1,
                p: '10px',
                width: 420,
                [theme.breakpoints.down('sm')]: {
                    width: 350
                }, 
                bgcolor: 'white',
                boxShadow: 1,
                borderRadius: 2,
                color: 'primary.dark'
        }}>
            <Box
                component='img'
                src={props.imgurl}
                alt="product image" 
                sx={{
                    bgcolor: 'white',
                    width: 1,
                    aspectRatio: '1/1',
                    borderRadius: 2,
                    objectFit: 'cover'
            }}/>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 1,
                mt: 0.5
            }}>
                <Box>
                    <Box>{props.name}</Box>
                    <Box>${props.price}</Box>
                </Box>
                <Button color='inherit' onClick={() => {props.addToCart();}}>
                    <AddShoppingCartIcon/>
                </Button>
            </Box>
        </Box>
    );
};