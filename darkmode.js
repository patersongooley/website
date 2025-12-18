// Dark Mode Toggle Script
// This script handles dark mode functionality across all pages

function initDarkMode() {
    const html = document.documentElement;
    const darkModePreference = localStorage.getItem('darkMode');

    // Default to dark mode if no preference is set
    const isLightMode = darkModePreference === 'disabled';

    if (isLightMode) {
        html.setAttribute('data-theme', 'light');
        updateToggleButton(false);
    } else {
        // Default is dark mode (no data-theme attribute needed)
        updateToggleButton(true);
    }
}

function toggleDarkMode() {
    const html = document.documentElement;
    const darkModePreference = localStorage.getItem('darkMode');

    // Default to dark mode if no preference is set
    const isLightMode = darkModePreference === 'disabled';

    if (isLightMode) {
        html.removeAttribute('data-theme');
        localStorage.setItem('darkMode', null); // Reset to default (dark)
        updateToggleButton(true);
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('darkMode', 'disabled');
        updateToggleButton(false);
    if (button) {
        button.textContent = isDarkMode ? '☀️ Light' : '🌙 Dark';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initDarkMode);
