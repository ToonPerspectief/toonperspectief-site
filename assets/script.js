// Mobiele navigatie toggle
(function(){
  const btn = document.querySelector('.nav__toggle');
  const panel = document.getElementById('menu-panel');
  const links = panel.querySelectorAll('a');

  function toggle(){
    const open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', toggle);
  links.forEach(a => a.addEventListener('click', () => {
    if(panel.classList.contains('open')) toggle();
  }));
})();
