import "./styles.css";

import { createSplash } from "./splash.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";

const initializeSite = (function () {
  function initialize() {
    const nav = document.querySelector('nav');
    const buttonAssignment = {
      0: createSplash,
      1: createMenu,
      2: createAbout,
    };

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