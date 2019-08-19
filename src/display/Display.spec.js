import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";
import "react-testing-library/cleanup-after-each";

describe("<Display />", () => {
  it("Default state set to open and unlocked", () => {
    const { getByText } = render(<Display />);
    expect(getByText("Open"));
    expect(getByText("Unlocked"));
  });
  it("Accepting props", () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    expect(getByText("Closed"));
    expect(getByText("Locked"));
  });
});
