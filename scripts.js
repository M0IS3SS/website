document.querySelectorAll('.expandable').forEach(function(p) {
    p.addEventListener('click', function() {
        const desc = p.querySelector('.hidden-desc');
        if (desc) {
            desc.style.display = desc.style.display === 'none' ? 'inline' : 'none';
        }
    });
});