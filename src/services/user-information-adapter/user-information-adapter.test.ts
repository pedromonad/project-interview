import { userInformationAdapter } from './user-information-adapter';

describe('userInformationAdapter', () => {
  it('returns a list of objects with key and value', () => {
    const data = {
      login: 'pedromonad',
      id: 5639968,
      node_id: 'MDQ6VXNlcjU2Mzk5Njg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/5639968?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/pedromonad',
      html_url: 'https://github.com/pedromonad',
      followers_url: 'https://api.github.com/users/pedromonad/followers',
      following_url: 'https://api.github.com/users/pedromonad/following{/other_user}',
      gists_url: 'https://api.github.com/users/pedromonad/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/pedromonad/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/pedromonad/subscriptions',
      organizations_url: 'https://api.github.com/users/pedromonad/orgs',
      repos_url: 'https://api.github.com/users/pedromonad/repos',
      events_url: 'https://api.github.com/users/pedromonad/events{/privacy}',
      received_events_url: 'https://api.github.com/users/pedromonad/received_events',
      type: 'User',
      user_view_type: 'public',
      site_admin: false,
      name: 'Pedro Monad',
      company: 'Toptal',
      blog: 'https://medium.com/@pedro-barros',
      location: 'Brazil',
      email: 'pedrobarrostech@gmail.com',
      hireable: null,
      bio: 'undefined',
      twitter_username: null,
      public_repos: 347,
      public_gists: 45,
      followers: 68,
      following: 146,
      created_at: '2013-10-08T16:16:22Z',
      updated_at: '2024-10-22T11:45:09Z'
    };

    expect(userInformationAdapter(data)).toEqual([
      { key: 'company', value: 'Toptal' },
      { key: 'location', value: 'Brazil' },
      { key: 'email', value: 'pedrobarrostech@gmail.com' },
      { key: 'public_repos', value: 347 },
      { key: 'public_gists', value: 45 },
      { key: 'followers', value: 68 }
    ]);
  });
});
