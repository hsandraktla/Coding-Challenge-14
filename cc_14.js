//Task 2: Adding Support Tickets Dynamically
//Create a reference to ticketContainer.
const ticketContainer = document.getElementById("ticketContainer");

//Write a function that uses createElement to build a support ticket.
function addSupportTicket(customerName, issueDescription, priorityLevel) {
    const card = document.createElement("div");
    card.setAttribute("class", "support-ticket");

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
    priorityLabel.setAttribute("class", "priorty-level");

//Add a resolve button to remove the ticket.
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resolve-button");

//Append the support ticket to "ticketContainer" using appendChild.
    card.appendChild(nameHeading);
    card.appendChild(issueParagraph);
    card.appendChild(priorityLabel);
    card.appendChild(resolveButton);
    ticketContainer.appendChild(card);

};

//Task 2: Test Cases - Calling the function should add a new support ticket card to the dashboard.
addSupportTicket("Zachary Keenan", "The website is showing a 404 error when trying to access my account.", "High");
addSupportTicket("Sandra Ktla", "I need to update shipping address for an existing order.", "Medium");
addSupportTicket("Claire Mosley", "I can't find the option to reset my password on the login page.", "Low");
