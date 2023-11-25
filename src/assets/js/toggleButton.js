document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const menu = document.getElementById('menu');

    function toggleMenu() {
        menu.classList.toggle('menu-visible');
    }

    function closeMenuIfOpen(event) {
        if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
            menu.classList.remove('menu-visible');
        }
    }

    toggleButton.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenuIfOpen);
});


document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toogleOpenSidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    function checkScreenWidth() {
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('sidebar-open');
            sidebar.classList.add('sidebar-closed');
            overlay.style.display = 'none';
        } else {
            sidebar.classList.remove('sidebar-closed');
            sidebar.classList.add('sidebar-open');
        }
    }

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-open');
        sidebar.classList.toggle('sidebar-closed');
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    });

    overlay.addEventListener('click', function () {
        checkScreenWidth();
    });

    window.addEventListener('resize', function () {
        checkScreenWidth();
    });

    checkScreenWidth();
});
