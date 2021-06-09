import React from "react";
import { render } from "./utils/test-utils";
import App from "./App";
import * as hooks from "./store/hooks";

jest.mock("./pages/UserSelection", () => () => <div>UserSelection</div>);
jest.mock("./pages/PublicRepositoriesList", () => () => (
	<div>PublicRepositoriesList</div>
));

describe("snapshot test with mock", () => {
	const useSelectorMock = jest.spyOn(hooks, "useAppSelector");

	it("renders the UserSelection", () => {
		useSelectorMock.mockReturnValue(true);
		const { container } = render(<App />);

		expect(container).toMatchSnapshot();
	});

	it('renders the public repositories list', () => {
		useSelectorMock.mockReturnValue(false);
		const { container } = render(<App />);

		expect(container).toMatchSnapshot();
	});
});
