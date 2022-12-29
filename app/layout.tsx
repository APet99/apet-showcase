'use client';

import { ReactNode } from 'react';
import Header from 'components/__common__/layout/header';
import Footer from 'components/__common__/layout/footer';
import './globals.css';
import { Layout, Breadcrumb, theme } from 'antd';

const { Content } = Layout;
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <html lang='en'>
      <body>
        <Layout className='site-layout'>
          <Header />
          <Content style={{ padding: '0 50px', minHeight: '100vh' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
              {children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </body>
    </html>
  );
};
export default RootLayout;
