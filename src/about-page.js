import { displayAdder } from "./helper";
import eggFamily from './egg-family.png';

const populateAboutPage = () => {
    const parent = document.getElementById('content');

    const imageContainer = document.getElementById('image-container');

    displayAdder.createImage(imageContainer, eggFamily, 'egg-picture');

    const about = displayAdder.createDiv(parent, '', 'about', 'about');

    displayAdder.createDiv(about, 'Our Family', 'about-intro');

    const fatherTitle = "Frédregg";
    const fatherMessage = `I am the father of our lovely family. I have a passion for making delicious food
    and bringing joy to people's faces and stomachs. I serve as the head chef where I get to crack jokes all day long!`;
    const motherTitle = "Monahuevo";
    const motherMessage = `I'm the mother of our family and act as the floor manager at our restaurant. I get so eggcited
    everyday that I get to work. I love serving others and helping keep our restaurant running as smoothly as possible.`;
    const sonTitle = "Oeuf";
    const sonMessage = `I'm the only son of the family. I wash the dishes at the restaurant, and I absolutely hate it. 
    This restaurant is so dumb. Get me out please. I just want to eggsplore the world.`

    displayAdder.createDiv(about, fatherTitle, 'person-intro');
    displayAdder.createDiv(about, fatherMessage, 'person-info');
    displayAdder.createDiv(about, motherTitle, 'person-intro');
    displayAdder.createDiv(about, motherMessage, 'person-info');
    displayAdder.createDiv(about, sonTitle, 'person-intro');
    displayAdder.createDiv(about, sonMessage, 'person-info');
}

export {populateAboutPage as populateAboutPage};