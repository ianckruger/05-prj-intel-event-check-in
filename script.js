// Get all needed DOM elements

// Get the form name and team element
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track Attendance
let count = 0;
const maxCount = 50;

// Handling form submission
form.addEventListener("submit", function (event) {
  if (count < maxCount) {
    event.preventDefault();

    // Get form values
    const name = nameInput.value;
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text;
    const attendeeCount = document.getElementById("attendeeCount");
    // Could maybe shorten by adding .value to the end of the getElement?
    // Nvm, need .text

    // Increment count and log
    count++;
    attendeeCount.textContent = parseInt(count);

    // Update progress bar
    const percentage = Math.round((count / maxCount) * 100) + "%";
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentage;

    const teamCounter = document.getElementById(team + "Count");
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

    // Update text of team counter
    // Show welcome message
    const message = `Welcome, ${name} from ${teamName}!`;
    form.reset();
    document.getElementById("greeting").textContent = message;
  } else {
    const name = nameInput.value;
    const message = `Sorry, ${name}, the event is full.`;
    form.reset();
    document.getElementById("greeting").textContent = message;
  }
});
