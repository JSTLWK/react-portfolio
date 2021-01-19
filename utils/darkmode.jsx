export default function switchDarkMode() {
    if (localStorage.theme !== 'dark' || (!('theme' in localStorage))) {
      document.querySelector('html').classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.querySelector('html').classList.remove('dark')
      localStorage.theme = 'light'
    }
  
    console.log(localStorage.theme) 

}