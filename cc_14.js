//Task 2: Adding Support Tickets Dynamically
//Create a reference to ticketContainer.
const ticketContainer = document.getElementById("ticketContainer");

//Write a function that uses createElement to build a support ticket.
function addSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticket = document.createElement("div");
    ticket.setAttribute("class", "support-ticket");
    ticket.setAttribute("id", ticketContainer)

//Creating a heading for the custommer's name.
    const nameHeading = document.createElement("h2");
    nameHeading.textContent = customerName;
    nameHeading.setAttribute("class", "customer-name");

//Creating a paragraph for the issue description.
    const issueParagraph = document.createElement("p");
    issueParagraph.textContent = `Issue Description: ${issueDescription}`;
    issueParagraph.setAttribute("class", "issue-description");

//Create a label indicating priority level.
    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority Level: ${priorityLevel}`;
    priorityLabel.setAttribute("class", "priority-level");
    priorityLabel.classList.add(`priority-${priorityLevel.toLowerCase()}`);

//Add a resolve button to remove the ticket.
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resolve-button");


//Task 4: Implementing Ticket Resolution with Event Bubbling
//Attach a click event listener to the "Resolve" button that removes its parent ticket using removeChild.
    resolveButton.addEventListener("click", (event) => {
        ticketContainer.removeChild(ticket);
        console.log(`${customerName} was removed!`); //Logs a message when the resolve button is clicked.
        event.stopPropagation(); //Preventing the event from bubbling up to the container.
    });

//Attach a click event listener to "ticketContainer" that logs a message when any ticket is clicked.
    ticket.addEventListener("click", (event) => {
        console.log(`${customerName} was clicked.`); //Logs a message when the ticket is clicked.  
        event.stopPropagation();
    });

//Append the support ticket to "ticketContainer" using appendChild.
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    ticketContainer.appendChild(ticket);

};

//Task 2: Test Cases - Calling the function should add a new support ticket card to the dashboard.
addSupportTicket("Zachary Keenan", "The website is showing a 404 error when trying to access my account.", "High");
addSupportTicket("Sandra Ktla", "I need to update shipping address for an existing order.", "Medium");
addSupportTicket("Claire Mosley", "I can't find the option to reset my password on the login page.", "Low");


//Task 3: Converting NodeLists to Arrays for Bulk Updates
//Use document.querySelectorAll to select all tickets with a "High" priority class.
function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll(".priority-high");

//Convert the NodeList into an array using Array.from() or the spread operator.
    const ticketArray = Array.from(highPriorityTickets);

//Use an array method to update the appearance of high-priority tickets.
    ticketArray.forEach(ticket => {
        ticket.style.backgroundColor = "lightgreen"; //Add background color.
        ticket.style.border = "1px solid darkgreen"; //Add border.
    });
};

//Task 3: Test Cases - Call the function to highlight all tickets with a "High" priority class.
highlightHighPriorityTickets();