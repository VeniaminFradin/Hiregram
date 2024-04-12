document.addEventListener('DOMContentLoaded', function() {
    const details = JSON.parse(localStorage.getItem('jobDetails'));
    const container = document.getElementById('jobDetails');
    container.innerHTML = `
        <h1>${details.role} - ${details.companyName}</h1>
        <p><strong>Location:</strong> ${details.location}</p>
        <p><strong>Company Description:</strong> ${details.companyDescription}</p>
        <p><strong>Role Description:</strong> ${details.roleDescription}</p>
        <a href="${details.applyLink}" target="_blank"><button>Apply Online</button></a>
    `;
  });