/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,js,vue, css}',
        './components/**/*.{html,js,vue,css}',
    ],
    theme: {
        colors: {
            'blue-default' : '#6E07F3',
            'black-opacity-15': 'rgba(0, 0, 0, 0.15)',
        }
    }
    // ...
}