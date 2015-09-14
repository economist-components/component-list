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
    const ulTag = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    const liTags = TestUtils.scryRenderedDOMComponentsWithTag(render, 'li');

    const ulClassNames = ulTag.props.className.split(' ');
    ulClassNames.should.contain('list');
    ulClassNames.length.should.equal(1);
    liTags.length.should.equal(0);
  });

  it('should concat the class names on the ul tag', () => {
    const render = TestUtils.renderIntoDocument(
      <List className="list--test">
        <a href="#">1</a>
      </List>
    );
    const ulTag = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    const liTags = TestUtils.scryRenderedDOMComponentsWithTag(render, 'li');

    const ulClassNames = ulTag.props.className.split(' ');
    ulClassNames.should.contain('list--test');
    ulClassNames.should.contain('list');
    ulClassNames.length.should.equal(2);

    liTags.length.should.equal(1);
    liTags.map((liTag) => {
      const liClassNames = liTag.props.className.split(' ');
      liClassNames.should.contain('list__item');
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
    const ulTag = TestUtils.findRenderedDOMComponentWithTag(render, 'ul');
    const liTags = TestUtils.scryRenderedDOMComponentsWithTag(render, 'li');

    const ulClassNames = ulTag.props.className.split(' ');
    ulClassNames.should.contain('list');
    ulClassNames.length.should.equal(1);

    liTags.length.should.equal(2);
    liTags.map((liTag) => {
      const liClassNames = liTag.props.className.split(' ');
      liClassNames.should.contain('list__item');
      liClassNames.length.should.equal(1);
    });
  });
});
