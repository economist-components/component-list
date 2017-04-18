import 'babel-polyfill';
import React from 'react';
import List from './';

const content = [
  {
    text: 'Subscribe',
    href: 'http://www.economistgroupmedia.com',
  },
  {
    text: 'Economist',
    href: 'http://www.economist.com/rights/',
  },
];
export default (
  <List className="c-example--horizontal">
    {content.map((contentItem) => (
      <a
        key={contentItem.text}
        href={contentItem.href}
      >
        {contentItem.text}
      </a>
    ))}
  </List>
);
