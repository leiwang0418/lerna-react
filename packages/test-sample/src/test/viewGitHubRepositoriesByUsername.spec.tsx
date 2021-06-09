import { render, screen, waitFor } from "../utils/test-utils";
import { unmountComponentAtNode } from "react-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import {
	FAKE_USERNAME_WITH_REPOS,
	FAKE_USERNAME_WITHOUT_REPOS,
	FAKE_BAD_USERNAME,
	REPOS_LIST,
	NO_REPOS,
} from "./fixtures/github";
import nock from "nock";

describe("view GitHub repositories by username", () => {
	beforeAll(() => {
		nock("https://api.github.com")
			.defaultReplyHeaders({
				"access-control-allow-origin": "*",
				"access-control-allow-credentials": "true",
			})
			.persist()
			.get(`/users/${FAKE_USERNAME_WITH_REPOS}/repos`)
			.query(true)
			.reply(200, REPOS_LIST)
			.get(`/users/${FAKE_USERNAME_WITHOUT_REPOS}/repos`)
			.query(true)
			.reply(200, NO_REPOS)
			.get(`/users/${FAKE_BAD_USERNAME}/repos`)
			.query(true)
			.reply(404);
	});

	const steup = () => {
		render(<App />);

		const searchInput = screen.getByPlaceholderText("请输入GitHub用户名");
		userEvent.clear(searchInput);
		const submitButton = screen.getByRole("button", {
			name: "查看仓库列表",
		});

		return { searchInput, submitButton };
	};
	describe("when GitHub user has public repositories", () => {
		it("user can view the list of public repositories for entered GitHub username", async () => {
			const { searchInput, submitButton } = steup();

			userEvent.type(searchInput, FAKE_USERNAME_WITH_REPOS);
			expect(searchInput).toHaveAttribute(
				"value",
				FAKE_USERNAME_WITH_REPOS
			);

			userEvent.click(submitButton);
			const header = screen.getByText(
				`${FAKE_USERNAME_WITH_REPOS}的公共仓库:`
			);

			expect(header).not.toBeEmptyDOMElement();
			// todo 未添加载页面
			await waitFor(() =>
				REPOS_LIST.map((repository) => {
					expect(
						screen.getByText(repository.name)
					).toBeInTheDocument();
					expect(
						screen.getByText(repository.description)
					).toBeInTheDocument();
				})
			);

			expect(screen.queryByText("加载用户仓库列表失败")).toBeNull();
			expect(screen.queryByText("未发现仓库数据")).toBeNull();
		});
	});

	describe("when GitHub user no public repositories", () => {
		it("user is presented with a message that there are no public repositories for entered GitHub username", async () => {
			const { searchInput, submitButton } = steup();
			userEvent.type(searchInput, FAKE_USERNAME_WITHOUT_REPOS);
			expect(searchInput).toHaveAttribute(
				"value",
				FAKE_USERNAME_WITHOUT_REPOS
			);

			userEvent.click(submitButton);
			// todo 未添加载页面
			const header = screen.getByText(
				`${FAKE_USERNAME_WITHOUT_REPOS}的公共仓库:`
			);
			expect(header).not.toBeEmptyDOMElement();
			await waitFor(() => screen.getByText("未发现仓库数据"));

			expect(screen.queryByText("加载用户仓库列表失败")).toBeNull();
		});
	});

	describe("when GitHub user does not exist", () => {
		it("user is presented with an error message", async () => {
			const { searchInput, submitButton } = steup();
			userEvent.type(searchInput, FAKE_BAD_USERNAME);
			expect(searchInput).toHaveAttribute(
				"value",
				FAKE_BAD_USERNAME
			);

			userEvent.click(submitButton);
			// todo 未添加载页面
			const header = screen.getByText(
				`${FAKE_BAD_USERNAME}的公共仓库:`
			);
			expect(header).not.toBeEmptyDOMElement();
			await waitFor(() => screen.getByText("加载用户仓库列表失败"));

			expect(screen.queryByText("未发现仓库数据")).toBeNull();
		});
	});
});
