import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Carousel from './Carousel';

const test_photos = [
  {
    src: 'test1.com',
    caption: 'testing image 1'
  },
  {
    src: 'test2.com',
    caption: 'testing image 2'
  },
  {
    src: "test3.com",
    caption: "testing image 3"
  },
];

it("matches snapshot", function () {
  const { container } = render(<Carousel photos={test_photos} title={'testing images'} />);
  expect(container).toMatchSnapshot();
});

it("renders without crashing", function () {
  render(<Carousel photos={test_photos} title="images for testing" />);
});

it("it has the correct alt text & src", function () {
  const { container, debug } = render(<Carousel photos={test_photos} title={'testing images'} />);
  const img = container.querySelector('img');
  expect(img?.getAttribute('alt')).toEqual('testing image 1')
  expect(img?.getAttribute('src')).toEqual('test1.com')
});

it("clicking on the right arrow.", function () {
  const { container, debug } = render(<Carousel photos={test_photos} title={'testing images'} />);
  //expect the first image and not the second
  expect(container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  //click forward
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  //expect second image but not the first
  expect(container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
})

it("clicking on the left arrow.", function () {
  const { container, debug } = render(<Carousel photos={test_photos} title={'testing images'} />);

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  
  //start on the second image
  fireEvent.click(rightArrow);
  debug()
  //move back to the first
  fireEvent.click(leftArrow);
  //expect the first image and not the second
  expect(container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

})