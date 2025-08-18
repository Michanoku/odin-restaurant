import mitarashiImg from './img/mitarashi.png';
import yokanImg from './img/yokan.png';
import greenTeaImg from './img/greentea.png';

const createMenu = (function() {
  function create() {
    // Select content div already on page
    const content = document.querySelector('#content');
    content.textContent = '';
    
    // Create the container for the menu
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');
    
    // Creator object for images, text and place in container
    const menuCreator = {
      0: [mitarashiImg, 'Mitarashi Dango - ¥290'],
      1: [yokanImg, 'Azuki Yokan - ¥190'],
      2: [greenTeaImg, 'Green Tea - ¥120'],
    };

    // Create the container elements 
    for (const key in menuCreator) {
      // Create the container and the other elements
      const containerDiv = document.createElement('div');
      const imgDiv = document.createElement('div');
      const textDiv = document.createElement('div');
      const image = document.createElement('img');
      const text = document.createElement('p');

      /// Set image sources and text content
      image.src = menuCreator[key][0];
      image.alt = menuCreator[key][1];
      text.textContent = menuCreator[key][1];

      // Append the elements to their respective containers
      imgDiv.appendChild(image);
      textDiv.appendChild(text);
      containerDiv.append(imgDiv, textDiv);
      menuContainer.appendChild(containerDiv);
    };
    content.appendChild(menuContainer);
  }

  return { create };
})();

export { createMenu };