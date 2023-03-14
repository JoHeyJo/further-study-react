import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

it("matches snapshot", function () {
  const { container } = render(<Card caption={'test'} src={'test1.com'} currNum={1} totalNum={1} />);
  expect(container).toMatchSnapshot();
});

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card caption={'test'} src={'test1.com'} currNum={1} totalNum={1} />);
});

it("it has the correct alt text & src", function () {
  // this is a low-value test, but better than nothing
  const { container, debug } = render(<Card caption={'test'} src={'test1.com'} currNum={1} totalNum={1} />);
  const img = container.querySelector('img');
  expect(img?.getAttribute('alt')).toEqual('test')
  expect(img?.getAttribute('src')).toEqual('test1.com')
});