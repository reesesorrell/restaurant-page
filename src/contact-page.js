import { displayAdder } from "./helper";

const populateContactPage = () => {
    const parent = document.getElementById('content');

    const contact = displayAdder.createDiv(parent, '', 'contact', 'contact');
}

export {populateContactPage as populateContactPage};