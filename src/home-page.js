import { displayAdder } from "./helper";
import Icon from './eggs.png';

const populateHomePage = () => {
    const parent = document.getElementById('content');

    displayAdder.createDiv(parent, 'The Eggcelent Restaurante', 'home-title');

    const eggBackground = displayAdder.createDiv(parent, '', 'image-banner')

    displayAdder.createImage(eggBackground, Icon, '', 'egg-picture');

    const welcomeMessage = `Welcome to the Eggcelent Restaurante! Here we are passionate
    about creating the best eggs possible. We try to provide a variety of preperations
    using one of the most flexible ingredient found in any kitchen, the egg!`
    displayAdder.createDiv(parent, welcomeMessage, 'welcome-message');
}

export {populateHomePage as populateHomePage}