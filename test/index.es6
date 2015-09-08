import List from '../index.es6';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;
describe('List', () => {
  describe('it\'s a component', () => {
    it('and is compatible with React.Component', () => {
      List.should.be.a('function').and.respondTo('render');
    });
    it('and renders an element', () => {
      React.isValidElement(<List />).should.equal(true);
    });
  });

  it('should render a ul tag', () => {
    const render = TestUtils.renderIntoDocument(
      <List />
    );
    const ul = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    const li = TestUtils.scryRenderedDOMComponentsWithTag(render, 'li');

    const ulClassNames = ul.props.className.split(' ');
    ulClassNames.should.contain('b-list');
    ulClassNames.length.should.equal(1);
    li.length.should.equal(0);
  });

  it('should concat the class names on the ul tag', () => {
    const render = TestUtils.renderIntoDocument(
      <List className="b-list--test">
        <a href="#">1</a>
      </List>
    );
    const ul = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    const li = TestUtils.scryRenderedDOMComponentsWithTag(render, 'li');

    const ulClassNames = ul.props.className.split(' ');
    ulClassNames.should.contain('b-list--test');
    ulClassNames.should.contain('b-list');
    ulClassNames.length.should.equal(2);

    li.length.should.equal(1);
    li.map(function (e) {
      const liClassNames = e.props.className.split(' ');
      liClassNames.should.contain('b-list__item');
      liClassNames.length.should.equal(1);
    });
  });

  it('should render a ul tag and each children inside a li tag', () => {
    const render = TestUtils.renderIntoDocument(
      <List>
        <a href="#">1</a>
        <a href="#">2</a>
      </List>
    );
    const ul = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    const li = TestUtils.scryRenderedDOMComponentsWithTag(render, 'li');

    const ulClassNames = ul.props.className.split(' ');
    ulClassNames.should.contain('b-list');
    ulClassNames.length.should.equal(1);

    li.length.should.equal(2);
    li.map(function (e) {
      const liClassNames = e.props.className.split(' ');
      liClassNames.should.contain('b-list__item');
      liClassNames.length.should.equal(1);
    });
  });
});
