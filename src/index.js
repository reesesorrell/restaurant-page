import { populateHomePage } from "./home-page";
import { populateAboutPage } from "./about-page";
import { populateMenuPage } from "./menu-page";
import { populateContactPage } from "./contact-page";
import { displayAdder } from "./helper";
import './style.css';

const tabController = (function() {

    const _clearPage = ()  => {
        const imageBanner = document.getElementById('image-banner');
        const parent = imageBanner.nextElementSibling;
        parent.innerHTML = '';
        parent.remove();
        const imageHolder = document.getElementById('image-container');
        imageHolder.innerHTML = '';
    }

    const tabHome = () => {
        _clearPage();
        populateHomePage();
    }
    
    const tabAbout = () => {
        _clearPage();
        populateAboutPage();
    }
    
    const tabMenu = () => {
        _clearPage();
        populateMenuPage();
    }
    
    const tabContact = () => {
        _clearPage();
        populateContactPage();
    }

    return {tabHome, tabMenu, tabAbout, tabContact}
})();

const makeTabs = () => {
    const parent = document.getElementById('content');

    displayAdder.createDiv(parent, 'The Eggcelent Restauranté', 'home-title');

    const eggBackground = displayAdder.createDiv(parent, '', 'image-banner', 'image-banner')

    const eggContainerOne = displayAdder.createDiv(eggBackground, '', 'egg-container');

    const homeEgg = displayAdder.createDiv(eggContainerOne, '', 'egg,left-eggs');
    displayAdder.createDiv(homeEgg, 'Home', 'egg-text');
    homeEgg.onclick = tabController.tabHome;

    const aboutEgg = displayAdder.createDiv(eggContainerOne, '', 'egg,left-eggs');
    displayAdder.createDiv(aboutEgg, 'About', 'egg-text');
    aboutEgg.onclick = tabController.tabAbout;

    displayAdder.createDiv(eggBackground, '', 'image-container', 'image-container');

    const eggContainerTwo = displayAdder.createDiv(eggBackground, '', 'egg-container');

    const menuEgg = displayAdder.createDiv(eggContainerTwo, '', 'egg,right-eggs');
    displayAdder.createDiv(menuEgg, 'Menu', 'egg-text');
    menuEgg.onclick = tabController.tabMenu;

    const contactEgg = displayAdder.createDiv(eggContainerTwo, '', 'egg,right-eggs');
    displayAdder.createDiv(contactEgg, 'Contact', 'egg-text');
    contactEgg.onclick = tabController.tabContact;
}

makeTabs();

populateHomePage();