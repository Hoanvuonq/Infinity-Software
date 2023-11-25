const currentURL = window.location.pathname;
const items = document.querySelectorAll('.item-sidebar');

items.forEach(item => {
    item.addEventListener('click', function () {
        items.forEach(otherItem => {
            otherItem.classList.remove('active-items');
        });
        this.classList.add('active-items');
    });
});

const overviewItem = document.getElementById('overviewItem');
const lienheItem = document.getElementById('lienheItem');
const helpItem = document.getElementById('helpItem');

if (currentURL.includes('/Service.html')) {
    overviewItem.classList.add('active-items');
} else if (currentURL.includes('/Contacts.html')) {
    lienheItem.classList.add('active-items');
} else if (currentURL.includes('/Support.html')) {
    helpItem.classList.add('active-items');
}