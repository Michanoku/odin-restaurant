import dangoImg from './img/dango.png';

const createSplash = (function() {
  function create() {
    const content = document.querySelector('#content');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const image1 = document.createElement('img');
    const image2 = document.createElement('img');
    const image3 = document.createElement('img');
    image1.src = dangoImg;
    image2.src = dangoImg;
    image3.src = dangoImg;
    const text1 = document.createElement('div');
    const text2 = document.createElement('div');
    const text3 = document.createElement('div');
    text1.textContent = "Text"
    text2.textContent = "Text"
    text3.textContent = "Text"
    div1.append(image1, text1);
    div2.append(text2, image2);
    div3.append(image3, text3);
    content.append(div1, div2, div3);

    

    console.log("SPLASH!");
  }

  return { create };
})();


export { createSplash };