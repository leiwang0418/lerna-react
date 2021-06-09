import { fetchRepositories } from "./publicRepositoriesListSlice";
import { store } from "@store";

describe("publicRepositoriesListSlice", () => {
	it("should create fetchRepositories action fulfilled", async () => {
		const mockData = [
			{
				id: "lei",
				name: "test repository",
				description: "description",
				html_url: "html_url",
			},
		];

		global.fetch = jest.fn(
			(): Promise<any> =>
				Promise.resolve({
					json: () => Promise.resolve(mockData),
				})
		);

		const username = "lei";
		await store.dispatch(fetchRepositories(username));
		const requestUrl = `https://api.github.com/users/${username}/repos?sort=updated_at&order=desc`;
		expect(fetch).toBeCalledWith(requestUrl);

		const { repositories } = store.getState().repositories;

		expect(repositories).toEqual(mockData);
	});

	it("should create fetchRepositories action reject", async () => {
		global.fetch = jest.fn((): Promise<any> => Promise.reject());

		const username = "lei";
		await store.dispatch(fetchRepositories(username));
		const requestUrl = `https://api.github.com/users/${username}/repos?sort=updated_at&order=desc`;
		expect(fetch).toBeCalledWith(requestUrl);

		const { fetchError } = store.getState().repositories;

		expect(fetchError).toEqual(true);
	});
});
