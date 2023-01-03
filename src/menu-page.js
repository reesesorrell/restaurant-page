import { displayAdder } from "./helper";
import menuPicture from "./menu.jpg";

const populateMenuPage = () => {
    const parent = document.getElementById('content');

    const imageContainer = document.getElementById('image-container');

    displayAdder.createImage(imageContainer, menuPicture, 'egg-picture');

    const menu = displayAdder.createDiv(parent, '', 'menu', 'menu');
}

export {populateMenuPage as populateMenuPage};