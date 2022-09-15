import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ThemeProvider, useTheme } from '@mui/material/styles';

export default function Product(props) {
    // props -> name, price, imageurl
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m: 1,
                    p: '10px',
                    width: 420, 
                    bgcolor: 'white',
                    boxShadow: 1,
                    borderRadius: 2,
                    color: 'primary.dark'
                }}
            >
                <Box
                    component='img'
                    src={props.imgurl}
                    alt="product image" 
                    sx={{
                        bgcolor: 'white',
                        width: 400,
                        height: 400,
                        borderRadius: 2,
                        objectFit: 'cover'
                    }}
                />
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
                    <Button color='inherit'>
                        <AddShoppingCartIcon/>
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
};