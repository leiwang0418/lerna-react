import axios from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com';

const axiosGithub = axios.create({
	baseURL: GITHUB_BASE_URL
});

const getUserRepos = (username) => {
	const response = axiosGithub.get(`/users/${username}/repos?sort=updated_at&order=desc`);

	return response.data;
}

export getUserRepos;