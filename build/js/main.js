const portfolio = (async() => {

  // Give buttons logic to have an active class when clicked on.
  // This is to give some false impression of changing pages on a SPA 
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const headerButtons = header.querySelectorAll('button');

  const renderTemplate = async(sectionId) => {
    if(!sectionId) return
    main.innerHTML = null;
    const template = document.getElementById(sectionId);
    const clone = template.content.cloneNode(true)
    main.appendChild(clone)
    console.log(sectionId)
  };

  headerButtons.forEach(btn => btn.addEventListener('click', (e) => {
    headerButtons.forEach(btn => btn.classList.remove('bg-vs'));
    btn.classList.add('bg-vs');

    renderTemplate(e.target.value)
  }));

  renderTemplate("about");
})();

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
