import { displayAdder } from "./helper";

const populateMenuPage = () => {
    const parent = document.getElementById('content');

    const menu = displayAdder.createDiv(parent, '', 'menu', 'menu');

    displayAdder.createDiv(menu, 'All eggs are $3.44 each', 'menu-header');
    displayAdder.createDiv(menu, `Egg Preperations: Scrambled, Boiled, Poached, Egg Omelette, Baked, Fried, Custard`, 'menu-types');
    displayAdder.createDiv(menu, "No, we don't serve anything else. Stop asking.", 'menu-disclaimer');

}

export {populateMenuPage as populateMenuPage};