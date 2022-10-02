import { useState, useEffect } from 'react';
import Product from './Product';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MainBar from './MainBar';

// assets
import HopeSticker from '../assets/pig-hope.png';
import SnSSticker from '../assets/piggy-scratch.png'
import Cricut from '../assets/cricut-machine.jpeg';

export default function Catalog() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState({count: 0});

  const addToCart = () => {
    setCart({count: (cart.count + 1)})
    setShow(true);
  };

  // const handleClick = (item) => {
  //   // Update cart item quantity if already in cart
  //   if (cart.some((cartItem) => cartItem.productCode === item.productCode)) {
  //     setCart((cart) =>
  //       cart.map((cartItem) =>
  //         cartItem.productCode === item.productCode
  //           ? {
  //               ...cartItem,
  //               amount: cartItem.amount + 1
  //             }
  //           : cartItem
  //       )
  //     );
  //     return;
  //   }

  //   // Add to cart
  //   setCart((cart) => [
  //     ...cart,
  //     { ...item, amount: 1 } // <-- initial amount 1
  //   ]);
  // };

  // const handleChange = (productCode, d) => {
  //   setCart((cart) =>
  //     cart.flatMap((cartItem) =>
  //       cartItem.productCode === productCode
  //         ? cartItem.amount + d < 1
  //           ? [] // <-- remove item if amount will be less than 1
  //           : [
  //               {
  //                 ...cartItem,
  //                 amount: cartItem.amount + d
  //               }
  //             ]
  //         : [cartItem]
  //     )
  //   );
  // };

  return (
    <Container> 
      <Button 
        variant='contained'
        sx={{
          visibility: (show) ? 'visible' : 'hidden',
          position: 'fixed',
          right: '0.9vw',
          mt: 0.5
        }}
      >
        <ShoppingCartIcon/>
        {cart.count}
      </Button>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <MainBar/>
        <Product id='1' addToCart={addToCart} name='hope' price='2.50' imgurl={HopeSticker}/>
        <Product id='2' addToCart={addToCart} name='scratch n sniff' price='2.50' imgurl={SnSSticker}/>
        <Product id='3' addToCart={addToCart} name='the whole sticker machine' price='5000' imgurl={Cricut}/>
        <Product id='4' addToCart={addToCart} name='random sticker' price={2} imgurl='https://images.unsplash.com/photo-1500576992153-0271099def59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' />
        <Product id='5' addToCart={addToCart} name='random sticker pack (5)' price={8} imgurl='https://images.unsplash.com/photo-1619646081160-033d1d793388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        <Product id='6' addToCart={addToCart} name='random sticker pack (10)' price={15} imgurl='https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
        <Product id='7' addToCart={addToCart} name='random sticker pack (20)' price={25} imgurl='https://images.unsplash.com/photo-1562755918-d4fa85ac239f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' />
        <Product id='8' addToCart={addToCart} name='random sticker pack (50)' price={40} imgurl='https://images.unsplash.com/photo-1543123452-278551b0e9a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' />
        <Product id='9' addToCart={addToCart} name='random sticker pack (100)' price={75} imgurl='https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' />
      </Box>
    </Container>
  );
};