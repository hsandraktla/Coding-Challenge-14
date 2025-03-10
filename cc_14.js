//Task 2: Adding Support Tickets Dynamically
//Create a reference to ticketContainer.
const ticketContainer = document.getElementById("ticketContainer");

//Write a function that uses createElement to build a support ticket.
function addSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticket = document.createElement("div");
    ticket.setAttribute("class", "support-ticket");

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


//Task 5: Inline Editing of Employee Details
//Create an edit button for editing the card.
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "edit-button");

//Add an event listener to each employee card (or an edit button within it) that, on double-click, swaps static content with input fields.
    editButton.addEventListener("click", (event) => {
        const nameInput = document.createElement("input"); // Create input fields for editing customer's name.
        nameInput.value = nameHeading.textContent;
        nameInput.setAttribute("type", "text");

        const issueInput = document.createElement("input"); //Create input fields for editing issue description.
        issueInput.value = issueParagraph.textContent;
        issueInput.setAttribute("type", "text");

        const priorityInput = document.createElement("input"); //Create input fields for editing priority level.
        priorityInput.value = priorityLabel.textContent.replace(".priority-level");
        priorityInput.setAttribute("type", "text");

        const saveButton = document.createElement("button"); //Create a save button to save the edited details.
        saveButton.textContent = "Save Changes";
        saveButton.addEventListener("click", (event) => {
    //Update card content with new values
            nameHeading.textContent = nameInput.value;
            issueParagraph.textContent = `Issue Description: ${issueInput.value}`;
            priorityLabel.textContent = `Priority Level: ${priorityInput.value}`;

    //Updare priority class
            priorityInput.setAttribute("class", "priority-level");
            priorityInput.classList.add(`priority-${priorityLevel.toLowerCase()}`);


    //Revert input fields back to static text
            ticket.replaceChild(nameHeading, nameInput);
            ticket.replaceChild(issueParagraph, issueInput);
            ticket.replaceChild(priorityLabel, priorityInput);
            ticket.removeChild(saveButton);
        
    // Reapply high-priority highlighting if needed
    highlightHighPriorityTickets();
    });

    //Replace static elements with input fields and save button
        ticket.replaceChild(nameInput, nameHeading);
        ticket.replaceChild(issueInput, issueParagraph);
        ticket.replaceChild(priorityInput, priorityLabel);
        ticket.appendChild(saveButton);
        });

//Append the support ticket to "ticketContainer" using appendChild.
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    ticket.appendChild(editButton);
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