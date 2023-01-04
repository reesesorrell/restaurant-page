import { displayAdder } from "./helper";
import locationPic from "./location.png";

const populateContactPage = () => {
    const parent = document.getElementById('block-container');

    parent.classList.add('contact-container');

    displayAdder.createDiv(parent, '📞 344 344 3447', 'contact-info');
    displayAdder.createDiv(parent, '🏠 Chicken Court 42, Egg Whites, USA', 'contact-info');
    displayAdder.createImage(parent, locationPic, 'location-pic');
}

export {populateContactPage as populateContactPage};