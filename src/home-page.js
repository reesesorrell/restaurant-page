import { displayAdder } from "./helper";
import chefPic from "./chef.png";

const populateHomePage = () => {

    const parent = document.getElementById('block-container');

    parent.classList.add('home-container');

    displayAdder.createDiv(parent, 'Best eggs in the tri state area', 'info-text');
    displayAdder.createDiv(parent, 'Made with purpose for over 55 years', 'info-text');

    displayAdder.createImage(parent, chefPic, 'chef-pic');

    displayAdder.createDiv(parent, 'Come get eggcited with us!', 'info-text,extra-top-margin');
}

export {populateHomePage as populateHomePage};