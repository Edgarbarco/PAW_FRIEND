import React from 'react';
import { Layout as AntLayout } from 'antd';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const { Content } = AntLayout;

const SIDEBAR_WIDTH = 250;

const Layout = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh', background: '#2893a8' }}>
      <Navbar />
      <AntLayout style={{ marginTop: 64 }}>
        <Sidebar />
        <Content 
          style={{ 
            marginLeft: SIDEBAR_WIDTH,
            padding: '24px',
            background: '#275e5a',
            minHeight: 'calc(100vh - 64px)',
            transition: 'all 0.2s'
          }}
        >
          <div style={{
            background: '#275e5a',
            padding: '24px',
            borderRadius: '8px',
            minHeight: 'calc(100vh - 112px)'
          }}>
            {children}
          </div>
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;