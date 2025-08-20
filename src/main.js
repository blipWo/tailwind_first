const initApp = () => {
    const btn = document.getElementById('mobile-open-button');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  btn.classList.toggle('open');
});

}

document.addEventListener('DOMContentLoaded', initApp);

// Ganti bagian hamburger button dengan:
// <button id="hamburger-button" class="text-3xl md:hidden cursor-pointer w-8 h-8 flex items-center justify-center"></button>