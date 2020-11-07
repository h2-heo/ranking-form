/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ReactNode } from 'react';
import { Layout } from 'antd';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const { Header, Content, Footer } = Layout;

type SiteLayoutProps = {
  children?: ReactNode;
};

function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <Layout css={style} className="layout">
      <Header className="site-layout-header">
        <SiteHeader className="content" />
      </Header>
      <Content className="site-layout-content">
        <div className="content">{children}</div>
      </Content>
      <Footer className="site-layout-footer">
        <SiteFooter className="content" />
      </Footer>
    </Layout>
  );
}

const style = css`
  min-height: 100%;

  .site-layout-header > .content {
    max-width: 87.5rem;
    margin: auto;
  }

  .site-layout-content > .content {
    max-width: 87.5rem;
    margin: auto;
    padding: 1.5rem;
    background: #fff;
  }
`;

export default SiteLayout;
