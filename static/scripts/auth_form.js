document.addEventListener("DOMContentLoaded", function() {
    let btn_show = document.querySelector('#show');
    btn_show.addEventListener('click', function (event) {
        event.preventDefault();
        let login_form = document.querySelector('#login_form');
        // console.log(event.target.classList);
        login_form.classList.toggle('visible');
        // login_form.classList.add('visible');
    })
});