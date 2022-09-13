import Box from '@mui/material/Box';
import { ThemeProvider, useTheme } from '@mui/material/styles';

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
                    ml: 2,
                    mt: 2,
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
                    src='https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
                    alt="logo" 
                    sx={{
                        bgcolor: 'white',
                        width: 400,
                        height: 400,
                        borderRadius: 2
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: 1
                    }}    
                >
                    <Box>
                        random sticker pack (10)
                    </Box>
                    <Box>
                        $20
                    </Box>
                </Box>
            </Box>

        </ThemeProvider>

    );
};