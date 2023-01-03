import { displayAdder } from "./helper";
import eggFamily from './egg-family.png';

const populateAboutPage = () => {
    const parent = document.getElementById('content');

    const imageContainer = document.getElementById('image-container');

    displayAdder.createImage(imageContainer, eggFamily, 'egg-picture');

    const about = displayAdder.createDiv(parent, '', 'about', 'about');

    displayAdder.createDiv(about, 'Our Family', 'about-intro');

    const fatherTitle = "Frédregg";
    const fatherMessage = '- Example text example text example text example text example text ';
    const motherTitle = "Monahuevo";
    const motherMessage = '- Example text example text example text example text example text ';

    displayAdder.createDiv(about, fatherTitle, 'person-intro');
    displayAdder.createDiv(about, fatherMessage, 'person-info');
    displayAdder.createDiv(about, motherTitle, 'person-intro');
    displayAdder.createDiv(about, motherMessage, 'person-info');
}

export {populateAboutPage as populateAboutPage};