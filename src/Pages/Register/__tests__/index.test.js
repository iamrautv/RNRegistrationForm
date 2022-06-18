/**
 * @format
 */

import 'react-native';
import React from 'react';
import Register from '../index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Renders register page', () => {
  const tree = renderer.create(<Register />).toJSON();
  expect(tree).toMatchSnapshot();
});
