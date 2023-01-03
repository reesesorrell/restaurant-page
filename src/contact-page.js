import { displayAdder } from "./helper";
import eggPhone from './contact-egg.jpeg';

const populateContactPage = () => {
    const parent = document.getElementById('content');

    const imageContainer = document.getElementById('image-container');

    displayAdder.createImage(imageContainer, eggPhone, 'egg-picture');

    const contact = displayAdder.createDiv(parent, '', 'contact', 'contact');
}

export {populateContactPage as populateContactPage};