import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Carousel from './carousel';
import Features from './features';
import Price from './price';
import Header from './../../components/header';
import Footer from './../../components/footer';

const Home = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
