import React from 'react';

export function renderChildren(children) {
  if (typeof children === 'undefined') {
    children = [];
  }

  if (typeof children.length === 'undefined') {
    children = [ children ];
  }

  return children.map((child, key) => {
    const clonedChild = React.cloneElement(
      child,
      [ child.props ],
      [ child.props.children ]
    );
    return (
      <li
        className="list__item"
        key={`list__item--${ key }`}
      >
        {clonedChild}
      </li>
    );
  });
}

export default function List({
  children,
  className,
}) {
  return (
    <ul
      className={[ 'list', className ].join(' ')}
    >
      {renderChildren(children)}
    </ul>
  );
}

if (process.env.NODE_ENV !== 'production') {
  List.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.arrayOf(React.PropTypes.element),
    ]),
  };
}
