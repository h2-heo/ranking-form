/** @jsx jsx */
import { jsx } from '@emotion/core';

type SiteFooterProps = {
  className?: string;
};

function SiteFooter({ className }: SiteFooterProps) {
  return <div className={className}>©2020 Footer</div>;
}

export default SiteFooter;
