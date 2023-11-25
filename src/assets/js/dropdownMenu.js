document.getElementById('toggleDropdown').addEventListener('click', function () {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const arrowIcon = document.querySelector('#toggleDropdown .arrow');

    dropdownMenu.classList.toggle('dropdown-active');

    arrowIcon.classList.toggle('rotate');
});
