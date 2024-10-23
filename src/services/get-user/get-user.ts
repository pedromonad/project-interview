import { authInGithubApi } from '../auth-in-github-api/auth-in-github-api';

export const getUser = async (username: string) => {
  const api = authInGithubApi();

  return await api.request('GET /users/{username}', {
    username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
};
