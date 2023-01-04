import { populateHomePage } from "./home-page";
import { populateAboutPage } from "./about-page";
import { populateMenuPage } from "./menu-page";
import { populateContactPage } from "./contact-page";
import { displayAdder } from "./helper";
import './style.css';

const tabController = (function() {

    const _clearPage = ()  => {
        const container = document.getElementById('block-container');
        container.innerHTML = "";
        container.className = 'block-container';
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
    const content = document.getElementById('content');

    const parent = displayAdder.createDiv(content, '', 'main-bar');

    const homeEgg = displayAdder.createDiv(parent, '', 'egg,left-eggs');
    displayAdder.createDiv(homeEgg, 'Home', 'egg-text');
    homeEgg.onclick = tabController.tabHome;

    const aboutEgg = displayAdder.createDiv(parent, '', 'egg,left-eggs');
    displayAdder.createDiv(aboutEgg, 'Hours', 'egg-text');
    aboutEgg.onclick = tabController.tabAbout;

    displayAdder.createDiv(parent, 'The Eggcelent Restauranté', 'home-title');

    const menuEgg = displayAdder.createDiv(parent, '', 'egg,right-eggs');
    displayAdder.createDiv(menuEgg, 'Menu', 'egg-text');
    menuEgg.onclick = tabController.tabMenu;

    const contactEgg = displayAdder.createDiv(parent, '', 'egg,right-eggs');
    displayAdder.createDiv(contactEgg, 'Contact', 'egg-text');
    contactEgg.onclick = tabController.tabContact;

    displayAdder.createDiv(content, '', 'block-container', 'block-container');
}

makeTabs();

populateHomePage();