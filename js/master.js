// Check colors
let mainColors = localStorage.getItem('colors_items');

if (mainColors !== null) {
  document.documentElement.style.setProperty(
    '--main-color',
    localStorage.getItem('colors_items')
  );

  // Remove active class from all colors list item
  document.querySelectorAll('.colors-list li').forEach((element) => {
    element.classList.remove('active');
    // Add active class on element with data color === local storage item
    if (element.dataset.color === mainColors) {
      // Add active class
      element.classList.add('active');
    }
  });
}

// Toggle spin Class on icon
document.querySelector('.toggle-settings .fas ').onclick = function () {
  // Toggle class fa-spin on self
  this.classList.toggle('fa-spin');
  // Toggle Class open on main settings box
  document.querySelector('.settings-box').classList.toggle('open');
};

// Switch colors
const colorsLi = document.querySelectorAll('.colors-list li');
// Loop over list items
colorsLi.forEach((li) => {
  // Click on every list item
  li.addEventListener('click', (e) => {
    document.documentElement.style.setProperty(
      '--main-color',
      e.target.dataset.color
    );
    // Set Color to the localstorage color items
    localStorage.setItem('colors_items', e.target.dataset.color);

    // remove active classe from all childrens
    e.target.parentElement.querySelectorAll('.active').forEach((element) => {
      element.classList.remove('active');
    });

    // Add active class on self=
    e.target.classList.add('active');
  });
});

// Select Landing Page Element
const landingPage = document.querySelector('.landing-page');
// Get Array of imgs
let imgsArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
// Chang background Img
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  landingPage.style.backgroundImage = `url("../img/${imgsArray[randomNumber]}")`;
}, 40000);
