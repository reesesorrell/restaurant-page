import { displayAdder } from "./helper";
import friedEggPic from "./fried-egg.png";

const populateMenuPage = () => {
    const parent = document.getElementById('block-container');

    parent.classList.add('menu-container');

    const firstContainer = displayAdder.createDiv(parent, '', 'menu-item-container');
    const secondContainer = displayAdder.createDiv(parent, '', 'menu-item-container');
    const thirdContainer = displayAdder.createDiv(parent, '', 'menu-item-container');
    const fourthContainer = displayAdder.createDiv(parent, '', 'menu-item-container');

    displayAdder.createImage(firstContainer, friedEggPic, 'menu-item-picture');
    displayAdder.createDiv(firstContainer, 'Classic Fried Eggs', 'menu-item-title');
    displayAdder.createDiv(firstContainer, `Our classic fried eggs cooked to your choice of temperature in a cast iron skillet.
    They're simply eggcelent!`, 'menu-item-description');
}

export {populateMenuPage as populateMenuPage};