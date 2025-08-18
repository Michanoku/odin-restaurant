
const createSplash = (function() {
  function create() {
    // Select content div already on page
    const content = document.querySelector('#content');
    content.textContent = '';
    // Create textcontainer for splash
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    // Prepare text content for different elements
    const contentCreator = {
      title: 'Welcome to Three Dango Brothers',
      text1: 'Step into a cozy corner of Japan where tradition meets comfort. At Three Dango Brothers, we celebrate the simple joy of freshly made dango, soft, chewy rice dumplings glazed, grilled, and served with heart.',
      text2: 'Whether you\'re craving the sweet harmony of sanshoku dango, the rich savor of mitarashi, or a seasonal specialty, our skewers are crafted to bring people together, just like the brothers in the song that inspired our name.',
      text3: 'Come share a skewer (or three) and discover why dango has been a favorite treat for generations.',
    }
    // Create elements, add text content and append them to the container
    for (const key in contentCreator) {
      const element = document.createElement('p');
      element.textContent = contentCreator[key];
      textContainer.appendChild(element);
    }
    content.appendChild(textContainer);
    
    console.log("SPLASH!");
  }

  return { create };
})();


export { createSplash };