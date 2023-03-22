// import { expect, jest, test } from '@jest/globals';
import React from "react";
import { fireEvent, getByRole, render } from "@testing-library/react";
import Container from './Container';


beforeEach(function () {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

it("renders without crashing", function (){
  render(<Container />);
});

it("match snapshot", function () {
  const { container } = render(<Container />);
expect(container).toMatchSnapshot();
})

it("show a button 'flip me'", function (){
  const {container } = render(<Container />);
  const button = getByRole(container,'button');
  expect(button).toBeInTheDocument();
})

it("when the button is clicked it shows either heads or tails and tracks it", function (){
  const { container, debug } = render(<Container />);

  const flip = getByRole(container, 'button')
  expect(container.querySelector("img[src=''")).toBeEmptyDOMElement();
  debug()
  //one click for heads
  fireEvent.click(flip)
  expect(container.querySelector("img[src='tail.jpeg']")).toBeInTheDocument();
  expect(container.querySelector("img[src='head.jpeg']")).not.toBeInTheDocument();
  expect(container.querySelector('p')).toHaveTextContent('tails: 1 heads 0');
  //one more click for tails
  fireEvent.click(flip)
  expect(container.querySelector("img[src='head.jpeg']")).toBeInTheDocument();
  expect(container.querySelector("img[src='tail.jpeg']")).not.toBeInTheDocument();
  expect(container.querySelector('p')).toHaveTextContent('tails: 1 heads 1');

  debug()


})

afterEach(function () {
  (Math.random as jest.Mock).mockRestore();
});

