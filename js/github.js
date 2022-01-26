class Github {
  constructor() {
    this.client_id = '82638288f9f4089cefb6';
    this.client_secret = 'dd06aa44a9f4526c7518a296fdeb64a734896b73';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // Get User
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos,
    };
  }
}

export default Github;
