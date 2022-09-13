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
                    p: 2,
                    width: 'auto',
                    bgcolor: 'white',
                    boxShadow: 1,
                    borderRadius: 2
                }}
            >
                <Box
                    component='img'
                    src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
                    alt="logo" 
                    sx={{
                        bgcolor: 'white',
                        width: 400,
                        height: 400,
                        boxShadow: 1,
                        borderRadius: 2
                    }}
                />
                <Box>
                    Hello
                </Box>
            </Box>

        </ThemeProvider>

    );
};