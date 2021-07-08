import React from 'react';
import renderer from 'react-test-renderer';
import FortuneCard from './../FortuneCard';

test('renders correctly', () => {
  const tree = renderer.create(<FortuneCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
