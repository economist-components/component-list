import 'babel-polyfill';
import List from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('List', () => {

  it('renders a React element', () => {
    React.isValidElement(<List />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let list = null;
    before(() => {
      rendered = mount(
        <List className="list--test">
          <a href="#" className="child-1">1</a>
          <a href="#" className="child-2">2</a>
        </List>
      );
      list = rendered.find('.list');
    });

    it('renders a top level ul.list', () => {
      list.should.have.tagName('ul');
      list.should.have.className('list');
    });

    it('should concat the class names on the ul tag', () => {
      list.should.have.className('list--test');
    });

    it('should wrap each child in an <li>', () => {
      list.should.have.exactly(2).descendants('.list__item');
    });
  });

});
