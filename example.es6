import React from 'react';
import List from './index.es6';

const context = [
  {
    title: 'Subscribe',
    text: 'Subscribe',
    href: 'http://www.economistgroupmedia.com',
  }, {
    title: 'Economist',
    text: 'Economist',
    href: 'http://www.economist.com/rights/',
  },
];
function mapContextToAnchor(contextItem) {
  return (<a {...contextItem}>{contextItem.title}</a>);
}
export default (
  <List className="c-example--horizontal">{context.map(mapContextToAnchor)}</List>
);
