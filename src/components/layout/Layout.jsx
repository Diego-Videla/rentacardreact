import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';


const LayoutContainerStyled = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;

  margin: 0 auto;

  & p {
    text-align: center;
  }
`;

const ContentContainerStyled = styled.div`
  /*height: calc(100vh - 120px);*/
  height: auto;
  width: 100%;
`;

export const Layout = ({ children }) => {
  return (
    <LayoutContainerStyled>
      <Navbar/>
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <Footer/>
    </LayoutContainerStyled>
  );
};
