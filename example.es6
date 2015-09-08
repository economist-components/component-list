import React from 'react';
import List from './index.es6';

const context = [
  {
    title: 'Subscribe',
    text: 'Subscribe',
    href: 'http://www.economistgroupmedia.com',
  }, {
    itemProp: 'legalName',
    itemType: 'http://schema.org/Company',
    title: 'Economist',
    text: 'Economist',
    href: 'http://www.economist.com/rights/',
  },
];
export default (
  <List className="c-example--horizontal">
    {context.map(function mapContextToAnchor(d) {
      return (<a {...d}>{d.title}</a>);
    })}
  </List>
);
