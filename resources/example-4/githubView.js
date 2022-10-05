class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        this.fullName = repoData.full_name
        this.description = repoData.description
        this.image = repoData.organization.avatar_url
        console.log(repoData);
        this.display();
      });
    });
  }

  display() {
    document.querySelector('#repo-name').innerHTML = this.fullName
    document.querySelector('#repo-description').innerHTML = this.description
    document.querySelector('#repo-img').src = this.image
  }
}

module.exports = GithubView;