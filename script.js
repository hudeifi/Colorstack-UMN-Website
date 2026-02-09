// ColorStack UMN - Interactive Elements

// Learn More / About Us Toggle
const learnMoreBtn = document.getElementById('learn-more-btn');
const aboutUs = document.getElementById('about-us');

// Start with About Us hidden
aboutUs.style.display = 'none';

learnMoreBtn.addEventListener('click', () => {
    if (aboutUs.style.display === 'none') {
        aboutUs.style.display = 'block';
        learnMoreBtn.textContent = 'Show Less ↑';
    } else {
        aboutUs.style.display = 'none';
        learnMoreBtn.textContent = 'Learn More ↓';
    }
});
