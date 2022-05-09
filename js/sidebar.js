const menu = document.getElementById('sidebar-menu');
const sidebarWrapper = document.getElementById('sidebar-wrapper');

menu.addEventListener('click', () => {
    if (sidebarWrapper.style.transform === 'translateX(0px)') {
        sidebarWrapper.style.transform = 'translateX(78%)';
    } else {
        sidebarWrapper.style.transform = 'translateX(0)';
    }
});
