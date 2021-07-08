import React from 'react';
import renderer from 'react-test-renderer';
import FortuneModal from '../FortuneModal';

test('renders correctly', () => {
  const tree = renderer.create(<FortuneModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
