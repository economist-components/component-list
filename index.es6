import React from 'react';

export default class List extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element),
      ]),
    };
  }

  renderChildren() {
    function createListItem(child) {
      return (
        <li className="list__item" key={child.key}>{child}</li>
      );
    }
    let children = this.props.children;
    if (typeof children === 'undefined') {
      children = [];
    }
    if (typeof children.length === 'undefined') {
      children = [ children ];
    }
    return children.map(createListItem);
  }

  render() {
    let className = 'list';
    if (this.props.className) {
      className = [ className, this.props.className ].join(' ');
    }
    return (
      <ul
        className={className}
      >{this.renderChildren()}</ul>
    );
  }
}
