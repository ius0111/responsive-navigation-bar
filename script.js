let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

let searchBar = document.getElementById('js-searchbar');

navBarToggle.addEventListener('click', function()
{
    mainNav.classList.toggle('active');
    searchBar.classList.toggle('active');
});
