const ticketContainer = document.getElementById("ticketContainer")
// Task 2 Function
function supportTicketCreator(name,issue, priority){ // declares function and parameters
    const ticket = document.createElement('div')  // creates div
    ticket.setAttribute('class','support-ticket') // assigns class
    ticketContainer.appendChild(ticket) // appends to container

    const header =  document.createElement('h1') //  creates the header element
    header.setAttribute('class', "customer-name") // assigns class
    header.textContent = name;
    ticket.appendChild(header) // appends customer name to ticket

    const paragraph =  document.createElement('p') //  creates the paragraph element
    paragraph.setAttribute('class', "customer-issue") // assigns class
    paragraph.textContent = issue;
    ticket.appendChild(paragraph) // appends customer name to ticket

    const label =  document.createElement('label') //  creates the label element
    label.setAttribute('class', "customer-priority") // assigns class
    label.textContent = priority;
    ticket.appendChild(label) // appends customer name to ticket

    // remove button
    const resolveButton = document.createElement("button"); // creates button element
    resolveButton.setAttribute("class", "resolve-button"); // sets button class
    resolveButton.textContent = "resolve"; // sets button text

    resolveButton.addEventListener('click',()=>{ // creates an event listener that deletes ticket when clicked
        ticketContainer.removeChild(ticket)
    })
    ticket.appendChild(resolveButton)
}

supportTicketCreator("Joji", "Screen damage", "high") // calls function
supportTicketCreator("Bart", "Slow processing", "high") // calls function
supportTicketCreator("Janaina", "Visual Bug", "low") // calls function