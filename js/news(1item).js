//tabs and partners slider
let items = document.querySelectorAll('.projects__items');
[...items].forEach((item) => {
    item.classList.add('hide');
    if(item.children.length === 2 && document.body.clientWidth > 1199){
        item.style.justifyContent = 'flex-start';
        item.children[0].style.marginRight = '5%';
    }
});
items[0].classList.remove('hide');

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

//newsActive
let content = document.querySelector('.newsActive__wrapper');
let wrapper = document.querySelector('.newsActive');

$(window).on('resize load', function () {
    if($(window).width() > 1399){
        wrapper.style.height = parseInt(getComputedStyle(content).height) - 500 + 'px';
        return;
    }
    if($(window).width() > 579){
        wrapper.style.height = parseInt(getComputedStyle(content).height) - 400 + 'px';
        return;
    }
    else {
        wrapper.style.height = parseInt(getComputedStyle(content).height) - 200 + 'px';
    }
});