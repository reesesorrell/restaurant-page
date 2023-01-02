import { displayAdder } from "./helper";
import Eggs from "./eggs.png";

const populateHomePage = () => {

    const parent = document.getElementById('content');

    const imageContainer = document.getElementById('image-container');

    displayAdder.createImage(imageContainer, Eggs, 'egg-picture');

    const home = displayAdder.createDiv(parent, '', 'home', 'home');

    const welcomeMessage = `Welcome to the Eggcelent Restaurante! Here we are passionate
    about creating the best eggs possible. We try to provide a variety of preperations
    using one of the most flexible ingredient found in any kitchen, the egg!`
    displayAdder.createDiv(home, welcomeMessage, 'welcome-message');
}

export {populateHomePage as populateHomePage}