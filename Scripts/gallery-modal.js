document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const media = lightbox.querySelector('.lightbox__media');
    const caption = lightbox.querySelector('.lightbox__caption');
    const closeBtn = lightbox.querySelector('.lightbox__close');

    const galleryImages = document.querySelectorAll('.media-stack img');

    function openLightbox(img) {
        const fullSrc = img.dataset.full || img.src;
        media.src = fullSrc;
        media.alt = img.alt || '';
        caption.textContent = img.nextElementSibling ? img.nextElementSibling.textContent : '';
        lightbox.classList.add('is-visible');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('is-visible');
        lightbox.setAttribute('aria-hidden', 'true');
        media.src = '';
        caption.textContent = '';
        document.body.style.overflow = '';
    }

    galleryImages.forEach(img => {
        img.addEventListener('click', () => openLightbox(img));
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(img);
            }
        });
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', `Open ${img.alt || 'image'} in modal`);
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-visible')) {
            closeLightbox();
        }
    });
});

