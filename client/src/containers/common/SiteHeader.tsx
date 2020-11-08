/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Menu } from 'antd';

type SiteHeaderProps = {
  className?: string;
};

function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <div className={className}>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item>
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/polls">Polls</a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default SiteHeader;
