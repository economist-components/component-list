import React from 'react/addons';

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
        <li className="list__item">{child}</li>
      );
    }
    return React.Children.map(this.props.children, createListItem);
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
