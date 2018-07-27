window.addEventListener('load', run)

function toggleSubmenu (event) {
  const clicked = event.target.nextElementSibling
  const submenus = document.querySelectorAll('.submenu')
  submenus.forEach(function (submenu) {
    if (submenu === clicked) {
      submenu.classList.toggle('hide')
    } else {
      submenu.classList.add('hide')
    }
  })
}

function run () {
  const items = document.querySelector('#items')
  items.addEventListener('click', toggleSubmenu)
}
