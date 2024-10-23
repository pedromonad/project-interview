import { authInGithubApi } from '../../services/auth-in-github-api/auth-in-github-api';

export const useFindUserByUsername = async (username: string) => {
  const api = authInGithubApi();

  return await api.request('GET /users/{username}', {
    username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
};
