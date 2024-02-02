// JavaScript code for interactive features goes here

// Sample array to store sermon data
let sermons = [];

// Function to add a new sermon
function addSermon() {
    const title = document.getElementById("sermonTitle").value;
    const date = document.getElementById("sermonDate").value;
    const description = document.getElementById("sermonDescription").value;

    // Validate the input
    if (title && date && description) {
        const newSermon = {
            title,
            date,
            description
        };

        // Add the new sermon to the array
        sermons.push(newSermon);

        // Clear the input fields
        document.getElementById("sermonTitle").value = "";
        document.getElementById("sermonDate").value = "";
        document.getElementById("sermonDescription").value = "";

        // Call a function to update the UI with the new sermon
        displaySermons();
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to display sermons on the page
function displaySermons() {
    const sermonsContainer = document.getElementById("sermons");

    // Clear the existing content
    sermonsContainer.innerHTML = "";

    // Iterate through the sermons array and create HTML elements
    sermons.forEach((sermon, index) => {
        const sermonCard = document.createElement("div");
        sermonCard.className = "sermon card mt-3";
        sermonCard.innerHTML = `
            <div class="card-body">
                <h3 class="card-title">${sermon.title}</h3>
                <p class="card-text">Date: ${sermon.date}</p>
                <p class="card-text">${sermon.description}</p>
            </div>
        `;

        sermonsContainer.appendChild(sermonCard);
    });
}

// Event listener for the "Add Sermon" button
document.getElementById("addSermonBtn").addEventListener("click", addSermon);
