import { displayAdder } from "./helper";

const populateAboutPage = () => {
    const parent = document.getElementById('block-container');

    parent.classList.add('about-container');

    displayAdder.createDiv(parent, 'Hours:', 'info-text');
    displayAdder.createDiv(parent, 'Sunday: 11 AM - 3 PM', 'info-text');
    displayAdder.createDiv(parent, 'Monday: CLOSED', 'info-text');
    displayAdder.createDiv(parent, 'Tuesday: 7 AM - 3 PM', 'info-text');
    displayAdder.createDiv(parent, 'Wednesday: 7 AM - 3 PM', 'info-text');
    displayAdder.createDiv(parent, 'Thursday: 7 AM - 3 PM', 'info-text');
    displayAdder.createDiv(parent, 'Friday: 8 AM - 9 PM', 'info-text');
    displayAdder.createDiv(parent, 'Saturday: 8 AM - 9 PM', 'info-text');

}

export {populateAboutPage as populateAboutPage};