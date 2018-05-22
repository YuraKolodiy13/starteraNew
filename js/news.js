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
