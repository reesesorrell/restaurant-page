import { populateHomePage } from "./home-page";
import { displayAdder } from "./helper";
import './style.css';

const tabController = (function() {

    const _clearPage = (parentId)  => {
        const parent = document.getElementById(parentId);
        parent.innerHTML = '';
        parent.remove();
        const imageHolder = document.getElementById('image-container');
        imageHolder.innerHTML = '';
    }

    const tabHome = () => {
        _clearPage('home');
        populateHomePage();
    }
    
    const tabAbout = () => {
        console.log('about');
    }
    
    const tabMenu = () => {
        console.log('menu');
    }
    
    const tabContact = () => {
        console.log('contact');
    }

    return {tabHome, tabMenu, tabAbout, tabContact}
})();

const makeTabs = () => {
    const parent = document.getElementById('content');

    displayAdder.createDiv(parent, 'The Eggcelent Restaurante', 'home-title');

    const eggBackground = displayAdder.createDiv(parent, '', 'image-banner')

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