document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('searchButton');
  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');
  const roleInput = document.getElementById('roleInput');
  const locationInput = document.getElementById('locationInput');

  let currentPage = 1;
  const resultsPerPage = 5;

  const searchResults = [
      { id: 1, role: "Bioengineer", location: "Tel Aviv", companyName: "Roga Kopyta Inc.", companyDescription: "A leading technology company specializing in innovative solutions.", roleDescription: "Develop cutting-edge software solutions in a dynamic, fast-paced environment. Work with a team of talented engineers to push the boundaries of what is possible.", applyLink: "https://jobs.eu.lever.co/mobileye/6f53c016-ca8a-4b44-b1c5-5c6a6621161f/apply" },
      { id: 2, role: "Product Manager", location: "San Francisco", companyName: "Creative Solutions", companyDescription: "At the forefront of product development and innovation, our mission is to solve complex problems with simple, elegant solutions.", roleDescription: "Oversee the development and market launch of new products. Work closely with design and engineering teams to create products that meet the needs of our customers.", applyLink: "https://example.com/apply/2" },
      { id: 3, role: "UI/UX Designer", location: "Seattle", companyName: "Design First", companyDescription: "A design-centric company focused on delivering beautiful user experiences.", roleDescription: "Design intuitive and engaging user interfaces for our web and mobile applications. Collaborate with product and engineering teams to bring concepts to life.", applyLink: "https://example.com/apply/3" },
      { id: 4, role: "Data Analyst", location: "Boston", companyName: "DataWise", companyDescription: "DataWise helps businesses make better decisions by turning data into insights.", roleDescription: "Analyze data sets to identify trends, develop charts, and present actionable insights to help guide business strategies.", applyLink: "https://example.com/apply/4" },
      { id: 5, role: "Cybersecurity Specialist", location: "Washington D.C.", companyName: "SecureTech", companyDescription: "Dedicated to making the digital world safer for everyone, SecureTech provides cutting-edge cybersecurity solutions.", roleDescription: "Protect company networks and systems from cyber threats. Analyze security breaches and work with teams across the company to fortify defenses.", applyLink: "https://example.com/apply/5" },
  ];

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

  searchButton.addEventListener('click', function() {
      const role = roleInput.value.toLowerCase();
      const location = locationInput.value.toLowerCase();
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
      const filteredResults = searchResults.filter(result => {
          return (role ? result.role.toLowerCase().includes(role) : true) &&
                 (location ? result.location.toLowerCase().includes(location) : true);
      });

      displayResults(filteredResults);
  }

  prevPageButton.addEventListener('click', function() {
      if (currentPage > 1) {
          currentPage -= 1;
          displayResults(searchResults.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage));
      }
  });

  nextPageButton.addEventListener('click', function() {
      const totalPages = Math.ceil(searchResults.length / resultsPerPage);
      if (currentPage < totalPages) {
          currentPage += 1;
          displayResults(searchResults.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage));
      }
  });

  function showDetail(result) {
    // Store the details in local storage
    localStorage.setItem('jobDetails', JSON.stringify(result));
    // Navigate to the details page
    window.location.href = 'details.html';
}


});
