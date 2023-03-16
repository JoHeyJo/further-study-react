import React from "react";
import { render } from "@testing-library/react";
import Coin from './Coin';

it("renders without crashing", function () {
  render(<Coin side={''} alt={''}/>);
});

// it("match snapshot", function () {
//   const { container } = render(<Coin />);
//  expect(container).toMatchSnapShot();
// })