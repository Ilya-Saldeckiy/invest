$(document).ready(function(){

    // Начало выпадающего окна города

    languageDropdown = $('.header__language-dropdown');

    languageDropdown.hide();

    $('.header__language').click(function () {

        $(this).toggleClass('header__language-active');
        languageDropdown.slideToggle(250);
        return false;

    });

    $(document).mouseup(function (e) {
        var container = $(".header__language-block");
        if (container.has(e.target).length === 0){
            languageDropdown.hide(250);
            $('.header__language').removeClass('header__language-active');
        }
    });


    // Конец выпадающего окна города


    // Начало выпадающего окна меню

    menuDropdown = $('.header__main-dropdown');

    menuDropdown.hide();

    $('.dropmenu').click(function () {

        $(this).toggleClass('header__main-list__item-active');
        menuDropdown.slideToggle(250);
        return false;

    });

    $(document).mouseup(function (e) {
        var container = $(".header__main-list__item");
        if (container.has(e.target).length === 0){
            menuDropdown.hide(250);
            $('.dropmenu').removeClass('header__main-list__item-active');
        }
    });


    // Конец выпадающего окна меню


    // Начало выпадающего окна меню

    mobileDropdown = $('.mobile__menu');

    mobileDropdown.hide();

    $('.hamburger').click(function () {

        mobileDropdown.slideToggle(250);
        return false;

    });

    $(document).mouseup(function (e) {
        var container = $(".mobile__menu-dropdown");
        if (container.has(e.target).length === 0){
            mobileDropdown.hide(250);
            $('.hamburger').removeClass('hamburger-active');
        }
    });


    // Конец выпадающего окна меню


    // Начало Открытия каунтера

    $('.header__main-cart__counter').hide();

    $('.header__main-cart').click(function () {

        $(".header__main-cart__counter").show(300)

    });


    // Конец Открытия каунтера


    // Бургер

    $(".hamburger").click(function(){
        $(this).toggleClass("hamburger-active");
    });



});

