import mitarashiImg from './img/mitarashi.png';
import yokanImg from './img/yokan.png';
import greenTeaImg from './img/greentea.png';

const createMenu = (function() {
  function create() {
    const content = document.querySelector('#content');
    content.textContent = '';
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');
    const menuCreator = {
      0: [mitarashiImg, 'Mitarashi Dango - ¥290'],
      1: [yokanImg, 'Azuki Yokan - ¥190'],
      2: [greenTeaImg, 'Green Tea - ¥120'],
    };
    for (const key in menuCreator) {
      const containerDiv = document.createElement('div');
      const imgDiv = document.createElement('div');
      const textDiv = document.createElement('div');
      const image = document.createElement('img');
      const text = document.createElement('p');
      image.src = menuCreator[key][0];
      text.textContent = menuCreator[key][1];
      imgDiv.appendChild(image);
      textDiv.appendChild(text);
      containerDiv.append(imgDiv, textDiv);
      menuContainer.appendChild(containerDiv);
    };
    content.appendChild(menuContainer);
    console.log("MENU!");
  }

  return { create };
})();


export { createMenu };