import { render } from "@test-utils";
import UserRepositoriesList, {
	RepositoriesProps,
} from "./UserRepositoriesList";

jest.mock("./UserRepositoriesListItem", () => () => (
	<li>UserRepositoriesListItem</li>
));

describe("UserRepositoriesList", () => {
	it("should render error page", () => {
		const { container } = render(<UserRepositoriesList hasError={true} />);

		expect(container).toMatchSnapshot();
	});

	it("should render empy page", () => {
		const { container } = render(
			<UserRepositoriesList isFetching={false} />
		);

		expect(container).toMatchSnapshot();
	});

	it("should render UserRepositoriesList", () => {
		const props: RepositoriesProps = {
			isFetching: true,
			repositories: [
				{
					id: 1,
					name: "name",
					description: "description",
					html_url: "html_url",
				},
			],
		};

		const { container } = render(<UserRepositoriesList {...props} />);

		expect(container).toMatchSnapshot();
	});
});
