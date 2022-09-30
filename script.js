const portfolio = (async() => {

  // Give buttons logic to have an active class when clicked on.
  // This is to give some false impression of changing pages on a SPA 
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  const navButtons = nav.querySelectorAll('button');

  const about = await fetch(`./src/html/about.html`).then(res => res.text());
  const projects = await fetch(`./src/html/projects.html`).then(res => res.text());
  const contact = await fetch(`./src/html/contact.html`).then(res => res.text());

  const renderTemplate = async(sectionId = "about") => {
    main.innerHTML = null;
    main.innerHTML = (
      sectionId === "projects" ? projects :
      sectionId === "contact" ? contact : about
    );
    main.classList.remove('about','projects','contact');
    main.classList.add(sectionId)
  };

  navButtons.forEach(btn => btn.addEventListener('click', (e) => {
    navButtons.forEach(btn => btn.classList.remove('nav-active'));
    btn.classList.add('nav-active');

    renderTemplate(e.target.value)
  }));


  renderTemplate();
})();