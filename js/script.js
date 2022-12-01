const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleBtnDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleBtnLightIcon = document.getElementById(
  'theme-toggle-light-icon'
)

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  // Show light
  themeToggleBtnLightIcon.classList.remove('hidden')
} else {
  themeToggleBtnDarkIcon.classList.remove('hidden')
}

const toggleMode = () => {
  themeToggleBtnDarkIcon.classList.toggle('hidden')
  themeToggleBtnLightIcon.classList.toggle('hidden')

  //   If is in local storage
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  } else {
    // If not in local storage
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
}

//   Listen for toggle button click
themeToggleBtn.addEventListener('click', toggleMode)
