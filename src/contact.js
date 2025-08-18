const createContact = (function() {
  function create() {
    // Select content div already on page
    const content = document.querySelector('#content');
    content.textContent = '';

    // Create container for contact form
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');

    // Create form elements
    const title = document.createElement('div');
    const message = document.createElement('textarea');
    const email = document.createElement('input');
    const button = document.createElement('button');

    // Set text content and attributes
    title.textContent = 'Get in touch';
    button.textContent = 'Send';
    message.setAttribute('rows', 5);
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'mail@example.com');

    // Append elements to their respective containers
    contactContainer.append(title, message, email, button);
    content.appendChild(contactContainer);
  }

  return { create };
})();

export { createContact };