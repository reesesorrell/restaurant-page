import { displayAdder } from "./helper";

const populateHomePage = () => {

    const parent = document.getElementById('content');

    const home = displayAdder.createDiv(parent, '', 'home', 'home');

    const welcomeMessage = `Welcome to the Eggcelent Restaurante! Here we are passionate
    about creating the best eggs possible. We try to provide a variety of preperations
    using one of the most flexible ingredient found in any kitchen, the egg!`
    displayAdder.createDiv(home, welcomeMessage, 'welcome-message');
}

export {populateHomePage as populateHomePage};