//tabs and partners slider
let items = document.querySelectorAll('.description__items');
[...items].forEach((item) => {
    item.classList.add('hide');
    if(item.children.length === 2 && document.body.clientWidth > 1199){
        item.style.justifyContent = 'flex-start';
        item.children[0].style.marginRight = '5%';
    }
});
items[0].classList.remove('hide');


$(function () {
    $('.tabs a').click(function () {
        $(this).parents('.description').find('.description__items').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false;
    });

    $tabs = $('.tabs');
    $tabs.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $(this).parents('.description').find('.description__items').addClass('hide');
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

    $('.description__slides').slick({
        dots: true,
        slidesToShow: 1,
        appendArrows: '.description__btn',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></i></button>'
    });
});

//bar progress
let projectActive = document.querySelector('.projectActive');
projectActive.querySelector('.item__bar').style.width = projectActive.querySelector('.item__percent').innerHTML;

document.querySelector('.item__bar').style.width = document.querySelector('.item__percent').innerHTML;

//search
let item = document.querySelectorAll('.item');
let search = document.querySelector('.search-button');
if(document.body.clientWidth <= 1024){
    search.parentElement.classList.add('open');
}
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

//donate btn
let donateItem = document.querySelectorAll('.donate__item');
[...donateItem].forEach(item => {
    if(item.querySelector('.donate__title span').innerHTML >= 500){
        item.querySelector('.donate__btn').style.borderBottomColor = '#fff200';
    }
})