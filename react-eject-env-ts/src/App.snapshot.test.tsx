
/**
 * 
 * See https://jestjs.io/docs/en/tutorial-react for more.
 * 
 */

import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //tree.props.onMouseEnter();
  // re-rendering
  //tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //tree.props.onMouseLeave();
  // re-rendering
  //tree = component.toJSON();
  //expect(tree).toMatchSnapshot();
});

