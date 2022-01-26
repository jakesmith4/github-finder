import getElement from './getElement.js';

class UI {
  constructor() {
    this.profile = getElement('#profile');
  }

  // Display Profile DOM
  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}" alt="" />
    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
    </div>
    <div class="col-md-9">
    <span class="badge badge-primary">Public Repos: ${user.public_repos}
    </span>
    <span class="badge badge-secondary">Public Gits: ${user.public_gits}
    </span>
    <span class="badge badge-success">Public Follers: ${user.followers}
    </span>
    <span class="badge badge-info">Following: ${user.following}
    </span>
    <br/> <br/>
    <ul class="list-group">
    <li class="list-group-item">Company: ${user.company}
    </li>
    <li class="list-group-item">Website/Blog: ${user.blog}
    </li>
    <li class="list-group-item">Location: ${user.location}
    </li>
    <li class="list-group-item">Member Since: ${user.created_at}
    </li>
    </ul>
    </div>
    </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // Show User Repos
  showRepos(repos) {
    console.log(repos);
    let output = '';

    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
      <div class="col-md-6">
      <a href="${repo.html_url}" target="_blank"> ${repo.name}
      </a>
      </div>
      <div class="col-md-6">
      <span class="badge badge-primary">Stars: ${repo.stargazers_count}
    </span>
    <span class="badge badge-secondary">Watchers: ${repo.watchers_count}
    </span>
    <span class="badge badge-success">Forks: ${repo.forms_count}
    </span>
      </div>
      </div>
      </div>
      `;
    });

    // Output Repos
    getElement('#repos').innerHTML = output;
  }

  // Show Alert
  showAlert(message, className) {
    // Clear Any Remaining Alerts
    this.clearAlert();
    // Create Div
    const div = document.createElement('div');
    // Add ClassName
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = getElement('.searchContainer');
    // Get Search Box
    const search = getElement('.search');
    // Insert Alert
    container.insertBefore(div, search);

    // Timeout After 3 Secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Alert Message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}

export default UI;
