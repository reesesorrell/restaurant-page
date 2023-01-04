import { displayAdder } from "./helper";
import friedEggPic from "./fried-egg.png";
import scrambledEggPic from "./scrambled-eggs.png";
import eggsBenedictPic from "./eggs-benedict.png";
import omelettePic from "./omelette.png";

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

    displayAdder.createImage(secondContainer, scrambledEggPic, 'menu-item-picture');
    displayAdder.createDiv(secondContainer, 'Scrambled Eggs', 'menu-item-title');
    displayAdder.createDiv(secondContainer, `Soft, savory, salted, scrambled eggs are guaranteed to make you salivate. Cooked to
    perfection and served steaming hot.`, 'menu-item-description');

    displayAdder.createImage(thirdContainer, eggsBenedictPic, 'menu-item-picture');
    displayAdder.createDiv(thirdContainer, 'Eggs Benedict', 'menu-item-title');
    displayAdder.createDiv(thirdContainer, `English muffin, BAM. Canadian bacon, BAM. Poached egg, BAM. Perfect hollandaise sauce, BAM.
    Trust us, you need to try it.`, 'menu-item-description');

    displayAdder.createImage(fourthContainer, omelettePic, 'menu-item-picture');
    displayAdder.createDiv(fourthContainer, 'The Omelette', 'menu-item-title');
    displayAdder.createDiv(fourthContainer, `It's like a sandwich, but with eggs. Mix and match your favorites and we'll do what we do best.
    Cook some eggs and crack some yolks.`, 'menu-item-description');
}

export {populateMenuPage as populateMenuPage};