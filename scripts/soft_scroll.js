const cardLinkSkills = document.querySelector('.card_link_skills');
const cardLinkGd = document.querySelector('.card_link_gd');
const skillsBlock = document.querySelector('#skills');
const gdBlock = document.querySelector('#gd');

cardLinkSkills.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: (skillsBlock.offsetTop / 1.2 ),
        left: 0,
        behavior: 'smooth'
      });
})

cardLinkGd.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: (gdBlock.offsetTop),
        left: 0,
        behavior: 'smooth'
      });
})
