document.addEventListener('loaded', function (e) {
    e.preventDefault();
    const toggler = document.querySelector('.nav-toggler');
    toggler.addEventListener('click', function (e) {
        let links = document.querySelector('.nav-links');
        let collapsed = links.getAttribute('data-collapsed');
        if (collapsed === "true") {
            links.style.height = "auto";
            links.style.overflow = 'auto';
        } else {
            links.style.height = 0;
            links.style.overflow = 'hidden';
        }
    })
});