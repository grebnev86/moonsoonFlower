// Переключение картинок

const bigPhoto = document.querySelector('.card__photo--big')
const smallPhoto = document.querySelectorAll('.card__photo--small img')
const divSmallPhoto = document.querySelectorAll('.card__photo--small .img')



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


// Модальное окно

const cross = document.querySelector('.popUp__cross')
const popUp = document.querySelector('.popUp')
const firstScreenBtn = document.querySelector('.firstScreen__btn')



cross.addEventListener('click', (event) => {
    popUp.style.top = '-150vh';
    popUp.style.opacity = 0;
})

firstScreenBtn.addEventListener('click', (event) => {
    popUp.style.top = '50%';
    popUp.style.opacity = 1;

})



//*******отправка формы***********/

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('.popUp__form')


    form.addEventListener('submit', formSend)

    async function formSend(event) {
        event.preventDefault()
        let error = formValidate(form)
        let formData = new FormData(form)

        form.classList.add('_sending')

        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })



        if (response.ok) {
            let result = await response.json()
            // formPreview.innerHTML = '';
            form.reset()
            form.classList.remove('_sending')
        }

        else {
            alert('Error')
            form.classList.remove('_sending')
        }
    }

    function formValidate(form) {
        let error = 0
        let formReq = document.querySelectorAll('._req')
    }
})


