module.exports = function() {
    'use strict';

    var $siteNav = $('.navbar-mobile:nth-child(1)');
    var $logo = $('.header-brand-name');

    //---------------------
    // Add custom classes
    //---------------------
    $('.sticky-nav').children().wrapAll($('<div/>', {
        class: "sticky-nav__container"
    }));

    // Wrap site nav mega dropdown
    _.each($('.menu-dropdown'), function(item) {
        $(item).children().wrapAll($('<div/>', {
            class: "menu-dropdown__container"
        }));
    });

    //---------------
    // Prevent FUOC
    //---------------
    $('.header-section .sticky-nav .togglemenu')
        .add('.sticky-logo')
        .add('.dropdown.account')
        .add('.sticky-nav .header-cart .cart')
        .add('.sticky-nav .site-search-expander')
        .addClass('is-active');

    //------------------------
    // Position header items
    //------------------------
    // Position logo
    $logo.appendTo($siteNav);


    //------------------------------
    // Mobile - Close on 2nd touch
    //------------------------------
    $('#nested-menu-container-one a').on('click', function() {
        var linkHref = $(this).attr('href');
        var browserHref = window.location.pathname;

        if(linkHref === browserHref) {
            $('.navbar-mobile .btn-navbar').trigger('click');
        }
    });

    return 'active';
};
