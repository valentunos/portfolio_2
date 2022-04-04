
window.addEventListener('load', function () {
    let element = document.getElementById('language');

    element.addEventListener('click', function (e) {
        if (this.parentNode.classList.contains('active')) {
            this.parentNode.classList.remove("active");
        } else {
            this.parentNode.classList.add("active");
        }
    });

});



