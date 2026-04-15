document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Collect all field values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create an array of key-value pairs
  const formData = [
    ["Name", name],
    ["Email", email],
    ["Password", password],
  ];

  // Show the results section
  const resultContainer = document.getElementById("resultContainer");
  const resultBody = document.querySelector("#resultTable tbody");
  resultBody.innerHTML = ""; // Clear previous entries
  resultContainer.style.display = "block";

  // Populate the table
  formData.forEach(([key, value]) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${key}</td><td>${value}</td>`;
    resultBody.appendChild(row);
  });

  // Reset the form
  this.reset();
});