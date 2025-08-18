import dangoImg from './img/dango.png';

const createMenu = (function() {
  function create() {
    const content = document.querySelector('#content');
    content.textContent = '';
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');
    const menuCreator = {
      0: [dangoImg, 'text'],
      1: [dangoImg, 'text'],
      2: [dangoImg, 'text'],
    };
    for (const key in menuCreator) {
      const div = document.createElement('div');
      const image = document.createElement('img');
      const text = document.createElement('div');
      image.src = menuCreator[key][0];
      text.textContent = menuCreator[key][1];
      div.append(image, text);
      menuContainer.appendChild(div);
    };
    console.log("MENU!");
  }

  return { create };
})();


export { createMenu };