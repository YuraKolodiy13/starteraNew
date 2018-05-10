//slick slider
$(function () {
    $('.slider__items').slick({
        arrows: false,
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 1499,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

//bar progress
let item = document.querySelectorAll('.item');

[...item].forEach(item => {
    item.querySelector('.item__bar').style.width = item.querySelector('.item__percent').innerHTML;
});

//search
let search = document.querySelector('.search-button');
let expand = () =>{
    search.parentElement.classList.toggle('open');
    document.querySelector('.search-box').value = '';
    [...item].forEach(i => i.style.display = '');
};
search.addEventListener('click', expand);