import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon"); // selects the menu div that we are clicking
        this.menuContent = $(".site-header__menu-content"); //selects the hidden div that we want to display when it's clicked
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this)); //adding .bind allows this to target anything inside the () within bind
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");//adds new class to the selected menuContent
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;