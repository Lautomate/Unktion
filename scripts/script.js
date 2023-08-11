const sideMenu = document.querySelector('.hidden') 
const closeSideMenu = document.getElementById('closeSideMenu');

const fb = document.getElementById("fb");
const insta = document.getElementById("insta");
const li = document.getElementById("li");

function toggleSideMenu() {
    if(sideMenu.style.display == 'block') {
        sideMenu.style.display = 'none'
        sideMenu.classList.remove('smooth_slide')
    } else {
        sideMenu.style.display = 'block'
        sideMenu.classList.add('smooth_slide')
    }
}


closeSideMenu.addEventListener('click', function() {
    sideMenu.style.display = 'none'
})


fb.addEventListener('click', () => {
    window.open('https://www.facebook.com/laurencejem.galenopilapil/', '_target')
});

insta.addEventListener('click', () => {
    window.open('https://www.instagram.com/laurencepilapil/', '_target')
});

li.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/laurence-jem-pilapil-374a35271/', '_target')
});

