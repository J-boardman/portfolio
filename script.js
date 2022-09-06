// Give buttons logic to have an active class when clicked on.
// This is to give some false impression of changing pages on a SPA 
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const navButtons = nav.querySelectorAll('button');

const renderTemplate = (sectionId = "about") => {
  main.innerHTML = null;
  const template = document.getElementById(sectionId);
  main.appendChild(template.content.cloneNode(true));
  main.classList.remove('about','projects','contact');
  main.classList.add(sectionId)
};

navButtons.forEach(btn => btn.addEventListener('click', (e) => {
  navButtons.forEach(btn => btn.classList.remove('nav-active'));
  btn.classList.add('nav-active');

  renderTemplate(e.target.value)
}));


renderTemplate();
