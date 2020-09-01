import React from 'react';
import { Layout, Typography } from 'antd';

const { Paragraph } = Typography;
const { Footer } = Layout;

const GameFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    <Paragraph>
      Created by{' '}
      <a
        href="https://github.com/timkellytk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tim Kelly
      </a>{' '}
      for The Odin Project
    </Paragraph>
  </Footer>
);

export default GameFooter;
