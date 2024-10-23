import { Octokit } from 'octokit';

export const authInGithubApi = () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN
  });

  return octokit;
};
