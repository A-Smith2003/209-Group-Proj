document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Collect all field values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const website = document.getElementById("website").value;
  const age = document.getElementById("age").value;
  const dob = document.getElementById("dob").value;
  const time = document.getElementById("time").value;
  const color = document.getElementById("color").value;
  const range = document.getElementById("range").value;
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value;
  const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
  const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
                        .map(cb => cb.value)
                        .join(", ") || "None";

  // Create an array of key-value pairs
  const formData = [
    ["Name", name],
    ["Email", email],
    ["Password", password],
    ["Phone", phone],
    ["Website", website],
    ["Age", age],
    ["Date of Birth", dob],
    ["Preferred Time", time],
    ["Favorite Color", color],
    ["Interest Level", range],
    ["Contact Method", contactMethod],
    ["Services Interested In", services],
    ["Topic", topic],
    ["Message", message]
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