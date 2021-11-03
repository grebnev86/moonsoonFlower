// Переключение картинок

const bigPhoto = document.querySelector('.card__photo--big')
const smallPhoto = document.querySelectorAll('.card__photo--small img')
const divSmallPhoto = document.querySelectorAll('.card__photo--small .img')
const body = document.querySelector('body')




for (let i = 0; i < smallPhoto.length; i++) {
    bigPhoto.style.backgroundImage = `url(${smallPhoto[0].src})`
    smallPhoto[i].addEventListener('click', onSmallPhoto)
    smallPhoto[0].style.opacity = 1
}

function onSmallPhoto(event) {
    bigPhoto.style.backgroundImage = `url(${event.target.src})`
    for (let i = 0; i < smallPhoto.length; i++) {
        smallPhoto[i].style.opacity = 0.5
    }

    event.target.style.opacity = 1
}

bigPhoto.addEventListener('click', (event) => {
    bigPhoto.classList.toggle('bigPhoto')
})






