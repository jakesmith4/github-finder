// Module Imports
import getElement from './getElement.js';
import Github from './github.js';
import UI from './ui.js';

// Instantiate Github
const github = new Github();

// Instantiate UI
const ui = new UI();

// Search Input
const searchUser = getElement('#searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get Input Text
  const userText = e.target.value;

  if (userText) {
    // Make HTTP Call
    github.getUser(userText).then((data) => {
      console.log(data);
      if (data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    console.log('Nothing to show');
    ui.clearProfile();
  }
});
