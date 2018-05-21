//tabs and partners slider
let items = document.querySelectorAll('.projects__items');
if(items.length !== 0){
    [...items].forEach((item) => {
        item.classList.add('hide');
        if(item.children.length === 2 && document.body.clientWidth > 1199){
            item.style.justifyContent = 'flex-start';
            item.children[0].style.marginRight = '5%';
        }
    });
    items[0].classList.remove('hide');
}


let tabs = document.querySelectorAll('.tabs__link');
if(items.length > 0){
    for (let i = 0; i < tabs.length; i++){
        tabs[i].innerHTML += ' (' + items[i].children.length + ')';
    }
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

    $tabs = $('.tabs');
    $tabs.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $(this).parents('.projects__wrapper').find('.projects__items').addClass('hide');
        $(this).find('.slick-current').siblings().removeClass('active');
        var id = $(this).find('.slick-current a').attr('href');
        $(id).removeClass('hide');
        $(this).parent().find('.slick-current').addClass('active');
        return false;
    });
    $(window).on('resize load', function () {
        if($(window).width() > 767){
            if($tabs.hasClass('slick-initialized')){
                $tabs.slick('unslick');
            }
            return;
        }
        if(!$tabs.hasClass('slick-initialized')){
            $tabs.slick({
                slidesToShow: 1
            });
        }
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
    if(item.querySelector('.item__bar')){
        item.querySelector('.item__bar').style.width = item.querySelector('.item__percent').innerHTML;
    }
});
if(document.querySelectorAll('.item__bar').length === 1){
    document.querySelector('.item__bar').style.width = document.querySelector('.item__percent').innerHTML;
}

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

//focus
let input = document.querySelector('.subscribe label');
document.body.addEventListener('click', function (e) {
    let target = e.target;
    if(input){
        if(target === input || target === input.querySelector('input')){
            console.log(target);
            input.style.borderColor = 'gold';
        }else {
            input.style.borderColor = '';
        }
    }
});

//donate btn
let donateItem = document.querySelectorAll('.donate__item');
if(donateItem){
    [...donateItem].forEach(item => {
        if(item.querySelector('.donate__title span').innerHTML >= 500){
            item.querySelector('.donate__btn').style.borderBottomColor = '#fff200';
        }
    })
}