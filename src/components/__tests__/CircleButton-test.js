import React from 'react';
import renderer from 'react-test-renderer';
import CircleButton from './../CircleButton';

test('renders correctly', () => {
  const tree = renderer.create(<CircleButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
