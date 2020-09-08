import React from 'react';
import { Space, Layout } from 'antd';
import Header from './Components/Header/Header';
import Gameboards from './Components/Gameboards/Gameboards';
import Footer from './Components/Footer/Footer';
import styled from 'styled-components';
import './App.less';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

const App = () => {
  return (
    <Layout>
      <StyledWrapper>
        <Space direction="vertical" size="large" align="center">
          <Header />
          <Gameboards />
          <Footer />
        </Space>
      </StyledWrapper>
    </Layout>
  );
};

export default App;
