import { displayAdder } from "./helper";
import eggPhone from './contact-egg.jpeg';

const populateContactPage = () => {
    const parent = document.getElementById('content');

    const imageContainer = document.getElementById('image-container');

    displayAdder.createImage(imageContainer, eggPhone, 'egg-picture');

    const contact = displayAdder.createDiv(parent, '', 'contact', 'contact');

    displayAdder.createDiv(contact, 'Reach Out', 'contact-title');

    displayAdder.createDiv(contact, 'Telephone: 344-344-3447', 'contact-info')
    displayAdder.createDiv(contact, 'Email: concracktus@eggmail.com', 'contact-info');
}

export {populateContactPage as populateContactPage};