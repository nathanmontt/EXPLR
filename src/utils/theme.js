export function setTheme(theme) {
    document.body.setAttribute('id', theme)
    localStorage.setItem('theme', theme)
}

export function getSavedTheme() {
    return localStorage.getItem('theme') || 'dark-mode'
}