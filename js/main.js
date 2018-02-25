
var modal_link    = document.querySelector('.form_btn');
var modal_shadow  = document.querySelector('.modal-shadow');
var modal_content = document.querySelector('.modal-content');
var modal_close   = document.querySelector('.modal-content__close');

modal_link.addEventListener('click', function (e) {
    e.preventDefault();
    modal_shadow.classList.add('modal-show');
    modal_content.classList.add('modal-show');
});

modal_close.addEventListener('click', function (e) {
    e.preventDefault();
    modal_shadow.classList.remove('modal-show');
    modal_content.classList.remove('modal-show');
});

modal_shadow.addEventListener('click', function (e) {
    e.preventDefault();
    modal_shadow.classList.remove('modal-show');
    modal_content.classList.remove('modal-show');
});