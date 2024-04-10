document.getElementById('searchButton').addEventListener('click', function() {
  displayResults(1);
});

let currentPage = 1;
const resultsPerPage = 5; // Adjust based on your design preferences
const searchResults = [
  { id: 1, role: "Software Engineer", location: "New York", companyName: "Tech Innovations", companyDescription: "A leading technology company specializing in innovative solutions.", roleDescription: "Develop cutting-edge software solutions in a dynamic, fast-paced environment. Work with a team of talented engineers to push the boundaries of what is possible.", applyLink: "https://example.com/apply/1" },
  { id: 2, role: "Product Manager", location: "San Francisco", companyName: "Creative Solutions", companyDescription: "At the forefront of product development and innovation, our mission is to solve complex problems with simple, elegant solutions.", roleDescription: "Oversee the development and market launch of new products. Work closely with design and engineering teams to create products that meet the needs of our customers.", applyLink: "https://example.com/apply/2" },
  { id: 3, role: "UI/UX Designer", location: "Seattle", companyName: "Design First", companyDescription: "A design-centric company focused on delivering beautiful user experiences.", roleDescription: "Design intuitive and engaging user interfaces for our web and mobile applications. Collaborate with product and engineering teams to bring concepts to life.", applyLink: "https://example.com/apply/3" },
  { id: 4, role: "Data Analyst", location: "Boston", companyName: "DataWise", companyDescription: "DataWise helps businesses make better decisions by turning data into insights.", roleDescription: "Analyze data sets to identify trends, develop charts, and present actionable insights to help guide business strategies.", applyLink: "https://example.com/apply/4" },
  { id: 5, role: "Cybersecurity Specialist", location: "Washington D.C.", companyName: "SecureTech", companyDescription: "Dedicated to making the digital world safer for everyone, SecureTech provides cutting-edge cybersecurity solutions.", roleDescription: "Protect company networks and systems from cyber threats. Analyze security breaches and work with teams across the company to fortify defenses.", applyLink: "https://example.com/apply/5" },
  // Add more entries as needed
];

function displayResults(page) {
  const startIndex = (page - 1) * resultsPerPage;
  const endIndex = page * resultsPerPage;
  const paginatedResults = searchResults.slice(startIndex, endIndex);

  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = ''; // Clear existing content

  paginatedResults.forEach(result => {
      const resultDiv = document.createElement('div');
      resultDiv.textContent = `${result.role} at ${result.companyName}`;
      resultDiv.classList.add('result');
      resultDiv.style.cursor = 'pointer'; // Make it visually obvious it's clickable
      resultDiv.onclick = () => showDetail(result);
      resultsContainer.appendChild(resultDiv);
  });

  // Update the current page display
  document.getElementById('currentPage').textContent = currentPage;
}

function showDetail(result) {
  const detailsContainer = document.getElementById('searchResults');
  detailsContainer.innerHTML = `
      <button id="backButton">Back to previous page</button>
      <h2>${result.role} - ${result.companyName}</h2>
      <p><strong>Location:</strong> ${result.location}</p>
      <p><strong>Company Description:</strong> ${result.companyDescription}</p>
      <p><strong>Role Description:</strong> ${result.roleDescription}</p>
      <a href="${result.applyLink}" target="_blank"><button>Apply Online</button></a>
  `;

  document.getElementById('backButton').addEventListener('click', () => {
      displayResults(currentPage);
  });
}

document.getElementById('prevPage').addEventListener('click', function() {
  if (currentPage > 1) {
      currentPage -= 1;
      displayResults(currentPage);
  }
});

document.getElementById('nextPage').addEventListener('click', function() {
  const totalPages = Math.ceil(searchResults.length / resultsPerPage);
  if (currentPage < totalPages) {
      currentPage += 1;
      displayResults(currentPage);
  }
});

// Optionally, display the first page of results on page load
displayResults(1);

document.getElementById('searchButton').addEventListener('click', function() {
  const role = document.getElementById('roleInput').value.toLowerCase();
  const location = document.getElementById('locationInput').value.toLowerCase();
  displaySearchTags(role, location);
  filterAndDisplayResults(role, location);
});

function displaySearchTags(role, location) {
  const tagsContainer = document.getElementById('searchTags');
  tagsContainer.innerHTML = ''; // Clear existing tags
  if (role) tagsContainer.innerHTML += `<span>Role: ${role}</span> `;
  if (location) tagsContainer.innerHTML += `<span>Location: ${location}</span>`;
}

function filterAndDisplayResults(role, location) {
  // Filter searchResults based on input criteria
  const filteredResults = searchResults.filter(result => {
      return (role ? result.role.toLowerCase().includes(role) : true) &&
             (location ? result.location.toLowerCase().includes(location) : true);
  });

  displayResults(filteredResults);
}

function displayResults(results) {
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = ''; // Clear existing content

  if (results.length === 0) {
      resultsContainer.innerHTML = '<div>No results found</div>';
      return;
  }

  results.forEach(result => {
      const resultDiv = document.createElement('div');
      resultDiv.textContent = `${result.role} at ${result.companyName}`;
      resultDiv.classList.add('result');
      resultDiv.style.cursor = 'pointer';
      resultDiv.onclick = () => showDetail(result);
      resultsContainer.appendChild(resultDiv);
  });
}

// Add the showDetail function from the previous example here
