//tabs and partners slider
let items = document.querySelectorAll('.projects__items');
[...items].forEach((item) => item.classList.add('hide'));
items[0].classList.remove('hide');

let tabs = document.querySelectorAll('.tabs__link');
for (let i = 0; i < tabs.length; i++){
    tabs[i].innerHTML += ' (' + items[i].children.length + ')';
}


$(function () {
    $('.tabs a').click(function () {
        $(this).parents('.projects__wrapper').find('.projects__items').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false;
    });

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

//burger
let burger = document.querySelector('.navMain__btn');
let navList = document.querySelector('.navMain ul');

burger.addEventListener('click', function () {
    this.classList.toggle('open');
    navList.classList.toggle('visible')
});