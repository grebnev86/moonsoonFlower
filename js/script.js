
// Модальное окно
const body = document.querySelector('body')
const cross = document.querySelector('.popUp__cross')
const popUp = document.querySelector('.popUp__container')
const firstScreenBtn = document.querySelector('.firstScreen__btn')
const form = document.querySelector('.popUp__form')
const thanks = document.querySelector('.popUp__thanks')
const formNumber = document.querySelector('.popUp__form--number')

popUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('close__popUp')) {
        popUp.style.top = '-150vh';
        popUp.style.opacity = 0;
        form.reset()
        body.classList.remove('disable__scroll')
        formNumber.classList.remove('error__form')
    }
})

cross.addEventListener('click', (event) => {
    popUp.style.top = '-150vh';
    popUp.style.opacity = 0;
    form.reset()
    body.classList.remove('disable__scroll')
    formNumber.classList.remove('error__form')
})

firstScreenBtn.addEventListener('click', (event) => {
    popUp.style.left = 0;
    popUp.style.top = 0;
    popUp.style.opacity = 1;
    body.classList.add('disable__scroll')
})



//*******отправка формы***********/

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('.popUp__form')


    form.addEventListener('submit', formSend)

    async function formSend(event) {
        event.preventDefault()
        let error = formValidate()

        if (error != 0) {

            formNumber.classList.add('error__form')
        }
        else {
            let formData = new FormData(form)

            form.classList.add('_sending')
            let response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts', {
                method: 'POST',
                body: formData
            })



            if (response.ok) {
                let result = await response.json()
                form.reset()
                form.classList.remove('_sending')
                formNumber.classList.remove('error__form')
                //// close form after sucsess sending
                popUp.style.top = '-150vh';
                popUp.style.opacity = 0;
                form.reset()
                body.classList.remove('disable__scroll')
                thanks.classList.remove('close__thankyou')

                setTimeout(() => {
                    thanks.classList.add('close__thankyou')
                }, 3000)


            }

            else {
                alert('Error')
                form.classList.remove('_sending')
            }

        }

    }

    function formValidate(form) {
        let error = 0
        let formReq = document.querySelector('.popUp__form--number')


        if (formReq.value.length < 5) {
            error++
        }




        return error
    }
})


