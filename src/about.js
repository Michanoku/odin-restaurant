
const createAbout = (function() {
  function create() {
    // Select content div already on page
    const content = document.querySelector('#content');
    content.textContent = '';

    
    console.log("ABOUT!");
  }

  return { create };
})();


export { createAbout };