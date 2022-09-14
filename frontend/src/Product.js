import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ThemeProvider, useTheme } from '@mui/material/styles';

// random sticker pack (10)
// 20
// 'https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'

export default function Product(props) {
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