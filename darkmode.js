// Dark Mode Toggle Script
// This script handles dark mode functionality across all pages

function initDarkMode() {
    const html = document.documentElement;
    const darkModePreference = localStorage.getItem('darkMode');

    // Default to dark mode if no preference is set
    const isDarkMode = darkModePreference !== 'disabled';

    if (isDarkMode) {
        html.setAttribute('data-theme', 'dark');
        updateToggleButton(true);
    } else {
        updateToggleButton(false);
    }
}

function toggleDarkMode() {
    const html = document.documentElement;
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
    if (isDarkMode) {
        html.removeAttribute('data-theme');
        localStorage.setItem('darkMode', 'disabled');
        updateToggleButton(false);
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
        updateToggleButton(true);
    }
}

function updateToggleButton(isDarkMode) {
    const button = document.getElementById('darkModeToggle');
    if (button) {
        button.textContent = isDarkMode ? '☀️ Light' : '🌙 Dark';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initDarkMode);
