import "./styles.css";

import { createSplash } from "./splash.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const initializeSite = (function () {
  // Initialize the site by adding Event Listeners
  function initialize() {
    const nav = document.querySelector('nav');
    // Assignment of modules and nav children
    const buttonAssignment = {
      0: createSplash,
      1: createMenu,
      2: createContact,
    };

    // Add the event listeners to the buttons
    for (const key in buttonAssignment) {
      nav.children[key].addEventListener('click', () => {
        buttonAssignment[key].create();
      });
    }
  };
  
  return { initialize };
})();

initializeSite.initialize();
createSplash.create();