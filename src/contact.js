
const createContact = (function() {
  function create() {
    // Select content div already on page
    const content = document.querySelector('#content');
    content.textContent = '';
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');
    const title = document.createElement('div');
    title.textContent = 'Get in touch';
    const message = document.createElement('textarea');
    message.setAttribute('rows', 5);
    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'mail@example.com');
    const button = document.createElement('button');
    button.textContent = 'Send';

    contactContainer.append(title, message, email, button);
    content.appendChild(contactContainer);
    // add a div as a title
    // add message ,email and button


    
    console.log("ABOUT!");
  }

  return { create };
})();


export { createContact };