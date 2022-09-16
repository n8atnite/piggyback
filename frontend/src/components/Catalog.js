import * as React from 'react';
import Product from './Product';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainBar from './MainBar';

// assets
import HopeSticker from '../assets/pig-hope.png';
import SnSSticker from '../assets/piggy-scratch.png'
import Cricut from '../assets/cricut-machine.jpeg';

export default function Catalog() {
  return (
    <Container> 
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <MainBar/>
        <Product name='hope' price='2.50' imgurl={HopeSticker}/>
        <Product name='scratch n sniff' price='2.50' imgurl={SnSSticker}/>
        <Product name='the whole sticker machine' price='5000' imgurl={Cricut}/>
        <Product name='random sticker' price={2} imgurl='https://images.unsplash.com/photo-1500576992153-0271099def59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' />
        <Product name='random sticker pack (5)' price={8} imgurl='https://images.unsplash.com/photo-1619646081160-033d1d793388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        <Product name='random sticker pack (10)' price={15} imgurl='https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
        <Product name='random sticker pack (20)' price={25} imgurl='https://images.unsplash.com/photo-1562755918-d4fa85ac239f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' />
        <Product name='random sticker pack (50)' price={40} imgurl='https://images.unsplash.com/photo-1543123452-278551b0e9a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' />
        <Product name='random sticker pack (100)' price={75} imgurl='https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' />
      </Box>
    </Container>
  );
};