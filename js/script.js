
//******* Setting copyright to automatically update to current year */

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


//******    Setting mobile navigation */

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector(".header");

btnNav.addEventListener('click', () => {
  headerEl.classList.toggle("nav-open");
})


/* Fixing issues with Safari scrolling */
/* Implementing smooth scrolling */

const allLinks = document.querySelectorAll("a:link");


allLinks.forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();
  const href= link.getAttribute('href');

  //Scroll back to top from bottom
  if(href === '#') {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })}
  
  //Scroll to other links
  if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView( {behavior: "smooth"})
  }
 
  //Close mobile navigation
  if(link.classList.contains("main-nav-link")) {
    headerEl.classList.toggle("nav-open");
  }
  }))

///////////////////////////////////////////////////////////
  //STICKY NAVIGATION
  //Making it sticky only AFTER the hero section moves out of the viewport

  const sectionHero = document.querySelector('.section-hero')

  const obs = new IntersectionObserver( (entries) => {
    const ent = entries[0];
    console.log(ent);
    if(!ent.isIntersecting) {
      document.body.classList.add('sticky')
    } 

    if(ent.isIntersecting) {
      document.body.classList.remove('sticky')
    }
  }, {
    //below is specifying we will observe the element in the viewport ('null') - and the threshold will fire when 0% of the hero section is in the viewport (1 is completley inside the viewport). We added a neg root margin so that it appears right before the end of the element. The -80 is equal to the added 8rem for the height of the sticky nav bar.
    root: null,
    threshold: 0,
    rootMargin: '-80px'
  })

  obs.observe(sectionHero)





///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();



