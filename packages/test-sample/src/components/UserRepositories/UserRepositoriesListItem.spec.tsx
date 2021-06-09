import { render } from "@test-utils";

import UserRepositoriesListItem, { Props } from "./UserRepositoriesListItem";

describe("UserRepositoriesListItem", () => {
	it("should render UserRepositoriesListItem", () => {
		const props: Props = {
			name: "test repository",
			html_url: "url",
		};

		const { container } = render(<UserRepositoriesListItem {...props} />);

		expect(container).toMatchSnapshot();
	});
});
